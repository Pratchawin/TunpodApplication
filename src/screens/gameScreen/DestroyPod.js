import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Alert,
  ImageBackground,
} from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';

const { width, height } = Dimensions.get('window');

// คอมโพเนนต์สำหรับการเรนเดอร์แอปเปิ้ล
const Apple = ({ position }) => (
  <Image
    source={require('../../../assets/game/pod.png')}
    style={[styles.apple, { left: position[0], top: position[1] }]}
  />
);

// คอมโพเนนต์สำหรับการเรนเดอร์ปืน
const Gun = ({ position }) => (
  <Image
    source={require('../../../assets/game/rocket.png')}
    style={[styles.gun, { left: position[0], top: position[1] }]}
  />
);

// คอมโพเนนต์สำหรับการเรนเดอร์กระสุน
const Bullet = ({ position }) => (
  <View style={[styles.bullet, { left: position[0], top: position[1] }]} />
);

// ระบบสำหรับการเคลื่อนที่ของกระสุน
const MoveBullet = (entities) => {
  Object.keys(entities).forEach((key) => {
    if (key.startsWith('bullet')) {
      let bullet = entities[key];
      if (bullet.position[1] > -20) {
        bullet.position[1] -= 10;
      } else {
        delete entities[key];
      }
    }
  });
  return entities;
};

// ระบบสำหรับการเลื่อนแอปเปิ้ลลงมา
const MoveApple = (entities) => {
  let apple = entities.apple;

  if (apple.position[1] < height) {
    apple.position[1] += 3; // ปรับความเร็วของการเลื่อนแอปเปิ้ลที่นี่
  } else {
    apple.missed = true; // ระบุว่าแอปเปิ้ลหลุดขอบ
    apple.position = [Math.random() * (width - 50), 0];
  }

  return entities;
};
const playBombSound = async () => {
  const { sound } = await Audio.Sound.createAsync(
    require('../../../assets/game/bomb.mp3')
  );
  await sound.replayAsync();
};
// ระบบสำหรับการตรวจสอบการชนกัน
const CheckCollision = (entities, { dispatch }) => {
  let apple = entities.apple;
  let bullets = Object.keys(entities).filter((key) => key.startsWith('bullet'));

  // ตรวจสอบการชนกันระหว่างแอปเปิ้ลและปืน
  let gun = entities.gun;
  if (
    apple.position[0] < gun.position[0] + 50 &&
    apple.position[0] + 50 > gun.position[0] &&
    apple.position[1] < gun.position[1] + 50 &&
    apple.position[1] + 50 > gun.position[1]
  ) {
    apple.hit = true;
    apple.position = [Math.random() * (width - 50), 0]; // รีเซ็ตตำแหน่งแอปเปิ้ล
  }

  // ตรวจสอบการชนกันระหว่างกระสุนและแอปเปิ้ล
  bullets.forEach((bulletKey) => {
    let bullet = entities[bulletKey];

    if (
      bullet.position[0] < apple.position[0] + 50 &&
      bullet.position[0] + 10 > apple.position[0] &&
      bullet.position[1] < apple.position[1] + 50 &&
      bullet.position[1] + 20 > apple.position[1]
    ) {
      // ทำลายแอปเปิ้ลและกระสุนเมื่อชนกัน
      playBombSound();
      delete entities[bulletKey];
      apple.position = [Math.random() * (width - 50), 0]; // รีเซ็ตตำแหน่งแอปเปิ้ลหลังจากถูกยิง
      dispatch({ type: 'increment-score' });
    }
  });

  return entities;
};

// ระบบสำหรับการลดชีวิตและตรวจสอบสถานะเกม
const ManageLife = (entities, { dispatch }) => {
  let apple = entities.apple;

  if (apple.hit || apple.missed) {
    dispatch({ type: 'decrement-life' });
    apple.hit = false;
    apple.missed = false;
  }

  return entities;
};
//เล่นเสียงเลเซอร์
const playSound = async () => {
  const { sound } = await Audio.Sound.createAsync(
    require('../../../assets/game/laser.mp3')
  );
  await sound.replayAsync();
};
// ระบบสำหรับการควบคุมปืนและการยิงกระสุน
const ControlGun = (entities, { touches }) => {
  //ไฟล์เสียง
  let gun = entities.gun;
  let move = touches.find((t) => t.type === 'move');
  let press = touches.find((t) => t.type === 'press');

  if (move) {
    gun.position[0] += move.delta.pageX;
  }

  if (press) {
    playSound();
    const newBulletKey = `bullet${Date.now()}`;
    entities[newBulletKey] = {
      position: [gun.position[0] + 20, gun.position[1] - 20],
      renderer: <Bullet />,
    };
  }

  return entities;
};

export default function App({ navigation }) {
  const [life, setLife] = useState(3); // กำหนดค่าเริ่มต้นของชีวิตเป็น 3
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(true);
  const engine = useRef(null);

  const onEvent = (e) => {
    if (e.type === 'decrement-life') {
      setLife((prevLife) => {
        const newLife = prevLife - 1;
        if (newLife <= 0) {
          Alert.alert('Game Over', 'คุณแพ้แล้ว', [
            { text: 'เริ่มใหม่', onPress: restartGame },
            {
              text: 'ออกจากเกม',
              onPress: () => {
                navigation.navigate('Game');
              },
            },
          ]);
          setRunning(false);
        }
        return newLife;
      });
    }
    if (e.type === 'increment-score') {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const restartGame = () => {
    setLife(3);
    setScore(0);
    setRunning(true);
    engine.current.swap({
      apple: { position: [width / 2 - 25, 0], renderer: <Apple /> },
      gun: { position: [width / 2 - 25, height - 200], renderer: <Gun /> },
    });
  };

  return (
    <ImageBackground
      source={require('../../../assets/game/bgColor.png')}
      style={styles.backgroundImage}>
      <View>
        <GameEngine
          ref={engine}
          style={styles.gameContainer}
          systems={[
            MoveBullet,
            MoveApple,
            CheckCollision,
            ManageLife,
            ControlGun,
          ]}
          entities={{
            apple: { position: [width / 2 - 25, 0], renderer: <Apple /> },
            gun: {
              position: [width / 2 - 25, height - 200],
              renderer: <Gun />,
            },
          }}
          running={running}
          onEvent={onEvent}
        />
        <View style={styles.info}>
          <View style={styles.setHeartPosition}>
            <Ionicon name={'heart'} size={37} color={'red'} />
            <Text style={styles.lifeText}>{life}</Text>
          </View>
          <View style={styles.setScorePosition}>
            <Ionicon name={'restaurant-outline'} size={32} color={'#fff'} />
            <Text style={styles.scoreText}>{score}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gameContainer: {
    width,
    height,
    backgroundColor: 'white',
  },
  apple: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
  gun: {
    width: 80,
    height: 80,
    position: 'absolute',
  },
  bullet: {
    width: 10,
    height: 20,
    marginLeft: 15,
    backgroundColor: 'black',
    position: 'absolute',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    left: 10,
  },
  setHeartPosition: {
    display: 'flex',
    flexDirection: 'row',
  },
  setScorePosition: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
  },
  lifeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

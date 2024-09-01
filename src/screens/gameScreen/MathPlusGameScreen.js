import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

const MathPlusGameScreen = ({ navigation, route }) => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(10);
  const timerRef = useRef(null);

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  useEffect(() => {
    if (lives === 0) {
      clearTimeout(timerRef.current);
      Alert.alert(
        'จบเกม',
        'โปรดเลือก',
        [
          {
            text: 'ออกจากเกม',
            onPress: () => {
              setLives(0);
              setScore(0);
              generateRandomNumbers();
              navigation.navigate('Game');
            },
          },
          {
            text: 'เพิ่มชีวิต',
            onPress: () => {
              setLives(1);
              generateRandomNumbers();
            },
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }
  }, [lives]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleIncorrectAnswer();
    } else {
      timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft]);

  const generateRandomNumbers = () => {
    let level = 10;
    if (score >= 5) {
      level += 10;
    } else if (score >= 10) {
      level += 10;
    } else if (score >= 15) {
      level += 10;
    } else {
      level += 10;
    }
    setNumber1(Math.floor(Math.random() * level) + 1);
    setNumber2(Math.floor(Math.random() * level) + 1);
    setTimeLeft(10); // เวลาเริ่มต้น
  };

  const goBack = () => {
    Alert.alert(
      'ออกจากเกม',
      'ถ้ากดออกคะแนนทั้งหมดจะไม่บันทึก',
      [
        {
          text: 'ยืนยัน',
          onPress: () => {
            generateRandomNumbers();
            navigation.navigate('Game');
          },
        },
        {
          text: 'ยกเลิก',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  const handleSubmit = () => {
    const correctAnswer = number1 + number2;
    if (parseInt(answer) === correctAnswer) {
      setScore(score + 1);
      generateRandomNumbers();
    } else {
      handleIncorrectAnswer();
    }
    setAnswer('');
  };

  const handleIncorrectAnswer = () => {
    setLives((prevLives) => Math.max(prevLives - 1, 0));
    generateRandomNumbers();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTime}>{timeLeft}</Text>
      <Text style={styles.textNum}>
        {number1} + {number2} = ?
      </Text>
      <Text style={styles.textScore}>คะแนน: {score}</Text>
      <Text style={styles.text}>{'❤️'.repeat(Math.max(lives, 0))}</Text>
      <View style={styles.setInputText}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={answer}
          onChangeText={setAnswer}
        />
      </View>
      <View style={styles.arBtnSubmit}>
        <TouchableOpacity onPress={handleSubmit} style={styles.btnHandleSubmit}>
          <Text style={styles.btnTxtTitle}>ตอบ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 10,
  },
  text: {
    fontSize: 30,
    marginVertical: 10,
    textAlign: 'center',
  },
  textTime: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 10,
  },
  textScore: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
  textNum: {
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 50,
  },
  setInputText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnHandleSubmit: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  btnTxtTitle: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#fff',
  },
  arBtnSubmit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default MathPlusGameScreen;

import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GameScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <GameComponent
            gameTitle="Destroy pod"
            gameDetails="บังคับทิศทางจรวดไปทางซ้าย-ขวา กดเพื่อปล่อยกระสุนไปยังเป้าหมายเพื่อทำลายบุหรี่ไฟฟ้า คำเตือน อย่าให้บุหรี่ไฟฟ้าโดนตัวคุณ"
            navigation={navigation}
            screenName="MathPlusGameScreen"
          />
          <GameComponent
            gameTitle="ทำลายบุหรี่ไฟฟ้า"
            gameDetails="บังคับทิศทางจรวดไปทางซ้าย-ขวา กดเพื่อปล่อยกระสุนไปยังเป้าหมายเพื่อทำลายบุหรี่ไฟฟ้า คำเตือน อย่าให้บุหรี่ไฟฟ้าโดนตัวคุณ"
            navigation={navigation}
            screenName="MathPlusGameScreen"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const GameComponent = ({
  gameImage,
  gameTitle,
  gameDetails,
  navigation,
  screenName,
}) => {
  return (
    <TouchableOpacity
      style={styles.gameItems}
      onPress={() => navigation.navigate(screenName)}>
      <View style={styles.gameItemImage}>
        <Image
          style={styles.gameImage}
          source={require('../../../assets/game/rocketImg.png')}
        />
      </View>
      <View style={styles.gameTitle}>
        <Text style={styles.gameTitleText}>{gameTitle}</Text>
        <Text style={styles.gameDetailsText}>{gameDetails}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
  },
  gameItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 10,
  },
  gameImage: {
    width: 330,
    height: 200,
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },
  gameTitle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    backgroundColor: '#3f217a',
  },
  gameTitleText: {
    color: 'white',
    fontSize: 20,
  },
  scrollView: {
    alignItems: 'center',
  },
  gameDetailsText: {
    color: 'white',
  },
});
export default GameScreen;

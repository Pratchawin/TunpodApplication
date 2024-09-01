import React, { useState } from 'react';
import {
  Button,
  Image,
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Linking
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setIsSwitchOn((previousState) => !previousState);
  };

  const btnLogout = () => {
    navigation.navigate('LoginScreen');
  };
  //รายงานปัญหา
  const btnReport=()=>{
    navigation.navigate('LoginScreen');
  }
  //ให้คะเเนนความพึงพอใจ
  const btnReview=()=>{
    navigation.navigate('LoginScreen');
  }
  //ฟังก์ชั่นเปิดลิงค์
  const openLink=async(url)=>{
    const supported = await Linking.canOpenURL(url);
    if(supported){
      await Linking.openURL(url);
    }else{
      console.log(`Error:${url}`);
    }
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.container,
          { backgroundColor: isSwitchOn ? 'black' : 'white' },
        ]}>
        <View>
          <Image
            source={require('../../../assets/tunpodImage/tunpod.png')}
            style={styles.settingAvatarImage}
          />
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.btnSettingUserData} onPress={()=>openLink('https://docs.google.com/forms/d/e/1FAIpQLScSUVz30kdyzBh7yGSNevZDWRp207ZAeh3AXgu0wuU656NXww/viewform?usp=sf_link')}>
            <Ionicons style={styles.setIcon} name={'bug-outline'} size={20} />
            <Text style={styles.BtnSettingMenuText}>รายงานปัญหา</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSettingUserData} onPress={()=>openLink('https://docs.google.com/forms/d/e/1FAIpQLSf0xK44vTG3VzSBH7q1IhCO6bBJDo7sh2LK1o7wBZ8cAlkbFA/viewform?usp=sf_link')}>
            <Ionicons style={styles.setIcon} name={'happy-outline'} size={20} />
            <Text style={styles.BtnSettingMenuText}>ให้คะเเนนความพึงพอใจ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arBtnSave}>
          <TouchableOpacity style={styles.btnSaveData} onPress={btnLogout}>
            <Text style={styles.textLogout}>ออกจากแอพพลิเคชั่น</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  settingAvatarImage: {
    borderRadius: 150,
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  setIcon: {
    marginRight: 10,
  },
  menuContainer: {
    padding: 10,
    marginBottom: 20,
  },
  btnSettingUserData: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  BtnSettingMenuText: {
    paddingLeft: 0,
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnSaveData: {
    borderRadius: 15,
    backgroundColor: '#3383ff',
  },
  textLogout: {
    textAlign: 'center',
    padding: 14,
    color: '#fff',
  },
  arBtnSave: {
    padding: 10,
  },
});

export default SettingScreen;

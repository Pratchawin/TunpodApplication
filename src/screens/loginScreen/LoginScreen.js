import React from 'react'
import {View, Text, StyleSheet, Touchable, Image,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const TunpodLoginScreen=({navigation})=>{
  //เมื่อคลิกเข้าสู่ระบบจะตั้งค่า Token เก็บไว้ที่ AsyncStorage
  const BtnLogin=()=>{
    navigation.navigate('HomeScreen')
  }
  return(
    <View style={loginStyle.loginScreenContainer}>
      <View style={loginStyle.image_container}> 
        <View style={loginStyle.image_item}>
          <Image  
            source={require('../../../assets/tunpodImage/tunpod.png')}
            style={loginStyle.set_image}
          />
        </View>
        <View style={loginStyle.tunpod_area}>
          <Text style={loginStyle.tunpod_title}>Tunpod AI</Text>
          <Text style={loginStyle.tunpod_text_detail}>รู้เท่าทัน Pod</Text>
        </View>
      </View>
      
      <View style={loginStyle.login_button_container}>
        <TouchableOpacity style={loginStyle.btn_touchable_google} onPress={BtnLogin}>
          <Ionicons name="flash-outline" size={30} color="#FF0000"/>
          <Text style={loginStyle.text_login_gg_fb}>เริ่มต้นใช้งาน</Text>
        </TouchableOpacity>
      </View>
    </View> 
  )
}

//onPress={()=>navigation.navigate('HomeScreen')}
const loginStyle=StyleSheet.create({
  btn_touchable_google:{
    display:'flex',
    flexDirection:'row',
    padding:12,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff'
  },
  text_login_gg_fb:{
    paddingLeft:15,
    fontSize:18,
  },
  loginScreenContainer:{
    backgroundColor:'#FFE052',
    flex:1
  },
  image_container:{
    paddingTop:80
  },
  tunpod_area:{
    marginTop:5,
    padding:20
  },
  tunpod_title:{
    textAlign:'center',
    fontSize:30
  },
  tunpod_text_detail:{
    textAlign:'center',
    fontSize:16,
    color:'gray',
    paddingTop:12
  },
  image_item:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    textAlign:'center'
  },
  set_image:{
    borderRadius:150,
    width:250,
    height:250,
  },
  login_button_container:{
    flex:3,
    paddingRight:50,
    paddingLeft:50,
    paddingTop:20
  }
})


export default TunpodLoginScreen;
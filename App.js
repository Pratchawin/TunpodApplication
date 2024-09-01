import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';

//Home screen stack
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import CheckinScreen from './src/screens/homeScreen/CheckInScreen';
import GiftScreen from './src/screens/homeScreen/GiftScreen';
import HistoryScreen from './src/screens/homeScreen/HistoryScreen';
import RankScreen from './src/screens/homeScreen/RankScreen';
import FriendScreen from './src/screens/homeScreen/FriendScreen';
import AboutScreen from './src/screens/homeScreen/AboutScreen';

//Other screen
import SettingScreen from './src/screens/settingScreen/SettingScreen';
import LoginScreen from './src/screens/loginScreen/LoginScreen';
import NewsScreen from './src/screens/newsScreen/NewsScreen';
import ChatbotScreen from './src/screens/chatbotScreen/ChatbotScreen';
import GameScreen from './src/screens/gameScreen/GameScreen';
import MathPlusGameScreen from './src/screens/gameScreen/MathPlusGameScreen';
import RecommanScreen from './src/screens/loginScreen/RecommendScreen';
import DestroyPod from './src/screens/gameScreen/DestroyPod';
// สร้าง Stack Navigator
const Stack = createStackNavigator();
// สร้าง Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// สร้าง Stack สำหรับ Home
const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: '',
      headerShown: true, //false
      headerBackTitle: 'ย้อนกลับ',
      headerBackTitleVisible: true,
      headerTitleAlign: 'left',
      headerTitleStyle: { fontSize: 16 },
    }}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Checkin" component={CheckinScreen} />
    <Stack.Screen name="Gift" component={GiftScreen} />
    <Stack.Screen name="History" component={HistoryScreen} />
    <Stack.Screen name="Rank" component={RankScreen} />
    <Stack.Screen name="Friend" component={FriendScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
  </Stack.Navigator>
);
//สร้าง Stack สำหรับ Setting
const SettingStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitle: 'การตั้งค่า',
      headerTitleStyle: { fontSize: 16 },
    }}>
    <Stack.Screen name="Setting" component={SettingScreen} />
  </Stack.Navigator>
);
//สร้าง Stack สำหรับ News
const NewsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitle: 'ความรู้เกี่ยวกับบุหรี่ไฟฟ้า',
      headerTitleStyle: { fontSize: 16 },
    }}>
    <Stack.Screen name="News" component={NewsScreen} />
  </Stack.Navigator>
);
//สร้าง Stack สำหรับ Chatbot
const ChatbotStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitle: 'อันตรายจากบุหรี่ไฟฟ้า',
      headerTitleStyle: { fontSize: 16 },
    }}
    initialRouteName="Recommend">
    <Stack.Screen name="Recommend" component={RecommanScreen} />
    <Stack.Screen name="Chatbot" component={ChatbotScreen} />
  </Stack.Navigator>
);
//สร้าง Stack สำหรับ Game
const GameStack = ({ navigation, route }) => {
  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'MathPlusGameScreen') {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: 'Destroy Pod',
        headerTitleStyle: { fontSize: 16 },
      }}
      initialRouteName="Game">
      <Stack.Screen
        name="Game"
        component={GameScreen}
        screenOptions={{
          headerShown: true,
          headerTitle: 'Destroy Pod',
          headerTitleStyle: { fontSize: 16 },
        }}
      />
      <Stack.Screen
        name="MathPlusGameScreen"
        component={DestroyPod}
        screenOptions={{
          headerShown: false,
          headerTitle: 'Destroy Pod',
          headerTitleStyle: { fontSize: 16 },
        }}
      />
    </Stack.Navigator>
  );
};
// แอปพลิเคชันหลัก เริ่มต้นด้วย Chatbot
const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false}}>
      <Tab.Screen
        name="NewsScreen"
        component={NewsStack}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => {
            return <Ionicon name="newspaper" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="ChatbotScreen"
        component={ChatbotStack}
        options={{
          tabBarLabel: 'Chatbot',
          tabBarIcon: ({ color, size }) => {
            return <Ionicon name="chatbubbles" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Ionicon name="home" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="GameScreen"
        component={GameStack}
        options={{
          tabBarLabel: 'Game',
          tabBarIcon: ({ color, size }) => {
            return <Ionicon name="game-controller" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingStack}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => {
            return <Ionicon name="person" size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
// แอปพลิเคชันหลัก เริ่มต้นด้วย LoginScreen
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

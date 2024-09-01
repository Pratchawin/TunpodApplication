import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//API Gemini
const apiKey = 'AIzaSyA9Iq2sUZ-51929EK8ZVsjQgxT51QnQ8GE';
const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
const headers = {
  'Content-Type': 'application/json',
};

const ChatbotScreen = ({ route, navigation }) => {
  //รับค่า navaigator จากหน้า Recommand
  const { item } = route.params || {};
  // การใช้ useState สำหรับ messages และ textQuestion
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'สวัสดีผมชื่อ Tunpod มีอะไรให้ช่วยไหมครับ?',
      time: new Date().toLocaleTimeString('th-TH'),
      sender: 'other',
      avatar: require('../../../assets/tunpodImage/tunpod.png'),
    },
  ]);

  const [textQuestion, setTextQuestion] = useState('');
  //ฟังก์ชั่นตั้งค่า ผู้ส่ง เเละ ข้อความ
  const setMessage = (text, sender) => {
    const newMessage = {
      id: String(messages.length + 1), // ใช้ length + 1 เพื่อสร้าง id ใหม่
      text,
      time: new Date().toLocaleTimeString('th-TH'),
      sender,
      avatar:
        sender === 'user'
          ? require('../../../assets/userImage/user.png')
          : require('../../../assets/tunpodImage/tunpod.png'),
    };
    // ส่งข้อความใหม่ไปยัง array ของ messages
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };
  //useEffect เพื่อเช็คค่าเเละส่งข้อความ item
  useEffect(() => {
    const fetchData = async () => {
      if (item) {
        setMessage(item, 'user');
        setMessage('โปรดรอสักครู่ครับ...', 'other');
        const requestBody = {
          contents: [{ parts: [{ text: item }] }],
        };
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          const tunpod_data = data.candidates[0].content.parts[0].text;
          setMessage(tunpod_data, 'other');
          setTextQuestion('');
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, []);

  //ฟังก์ชั่นเมื่อส่งค่า
  const handlePress = async () => {
    if (textQuestion.trim() === '') {
      Alert.alert('ข้อผิดพลาด', 'กรุณากรอกข้อความ');
      return;
    }

    // อัพเดท messages
    setMessage(textQuestion, 'user');
    const userMessage = textQuestion; // เก็บข้อความผู้ใช้เพื่อนำไปใช้ใน request
    setTextQuestion(''); // เคลียร์ข้อความใน TextInput หลังจากส่งข้อความแล้ว

    //สร้าง Body สำหรับ Request
    const requestBody = {
      contents: [
        {
          parts: [{ text: userMessage }],
        },
      ],
    };
    try {
      //ส่งข้อมูลไปยัง Gemini
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        const tunpod_data = data.candidates[0].content.parts[0].text;
        //อัพเดทข้อความที่ได้รับจาก Server
        setMessage(tunpod_data, 'other');
        setTextQuestion('');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  return (
    <SafeAreaView style={styles.safeAre}>
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <ChatBubble
              text={item.text}
              time={item.time}
              sender={item.sender}
              avatar={item.avatar}
            />
          )}
          keyExtractor={(item) => item.id}
          style={styles.chatList}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="พิมพ์ข้อความ..."
            value={textQuestion}
            onChangeText={setTextQuestion}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handlePress}>
            <Ionicons name="send" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const ChatBubble = ({ text, time, sender, avatar }) => {

  const isUser = sender === 'user';
  return (
    <View
      style={[
        styles.messageContainer,
        isUser ? styles.userMessage : styles.otherMessage,
      ]}>
      {!isUser && <Image source={avatar} style={styles.avatar} />}
      <View style={isUser ? styles.bubble : styles.other_bubble}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      {isUser && <Image source={avatar} style={styles.avatar} />}
    </View>
  );
};

const styles = StyleSheet.create({
  safeAre: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  chatList: {
    flex: 1,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },
  input: {
    flex: 1,
    padding: 5,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  otherMessage: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    marginHorizontal: 10,
  },
  other_bubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#FFED69',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    color: '#555',
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default ChatbotScreen;

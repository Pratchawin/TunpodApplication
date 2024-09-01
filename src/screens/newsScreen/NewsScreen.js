import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { WebView } from 'react-native-webview';

const NewsScreen = () => {
  const newsData = [
    {
      id: 1,
      adminName: 'Tunpod',
      profileImage: '',
      detail: 'บุหรี่ไฟฟ้าคืออะไร',
      activityImage: 'news.png',
      openlink: 'https://www.youtube.com/embed/ePy0chF6KQM', // ลิงก์ฝังวิดีโอ YouTube
    },
    {
      id: 2,
      adminName: 'Tunpod',
      profileImage: '',
      detail: 'กำเนิดบุหรี่ไฟฟ้า',
      activityImage: 'news.png',
      openlink: 'https://www.youtube.com/embed/gxlQkKmDCLQ',
    },
    {
      id: 3,
      adminName: 'Tunpod',
      profileImage: '',
      detail: 'นิโคตินในบุหรี่ไฟฟ้า',
      activityImage: 'news.png',
      openlink: 'https://www.youtube.com/embed/sEWGDpx-AGs',
    },
    {
      id: 4,
      adminName: 'Tunpod',
      profileImage: '',
      detail: 'เมื่อเสพติดบุหรี่ไฟฟ้า',
      activityImage: 'news.png',
      openlink: 'https://youtube.com/embed/x4rWuEmYVMQ',
    },
    
    {
      id: 5,
      adminName: 'Tunpod',
      profileImage: '',
      detail: 'ตลาดบุหรี่ไฟฟ้า',
      activityImage: 'news.png',
      openlink: 'https://youtube.com/embed/L8mBqUFrVk8',
    },
    
    {
      id: 6,
      adminName: 'Tunpod',
      profileImage: '',
      detail: 'อิวาลี่โรคปอดอักเสบ',
      activityImage: 'news.png',
      openlink: 'https://youtube.com/embed/12kJ6SmXxl4',
    },
    
    {
      id: 7,
      adminName: 'Tunpod',
      profileImage: '',
      detail: 'นิโคติน',
      activityImage: 'news.png',
      openlink: 'https://youtube.com/embed/B3h2n8miwL4',
    },
    
    {
      id: 8,
      adminName: 'Tunpod',
      profileImage: '',
      detail: '8 วิธีเลิกบุหรี่ไฟฟ้า',
      activityImage: 'news.png',
      openlink: 'https://youtube.com/embed/UpohZ8ktP-w',
    },
    
    {
      id: 9,
      adminName: 'Tunpod',
      profileImage: '',
      detail: 'ควันจากบุหรี่ไฟฟ้า',
      activityImage: 'news.png',
      openlink: 'https://youtube.com/embed/xTjXhCHJJBw',
    },
    
    {
      id: 10,
      adminName: 'Tunpod',
      profileImage: '',
      detail: 'หากมีปอดเพียงข้างเดียว',
      activityImage: 'news.png',
      openlink: 'https://youtube.com/embed/mKmZJtU4JWg',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {newsData.map((news) => (
          <View style={styles.card} key={news.id}>
            <View style={styles.header}>
              <Image
                source={require('../../../assets/tunpodImage/admin.png')}
                style={styles.profileImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.userName}>{news.adminName}</Text>
                <Text style={styles.activityText}>{news.detail}</Text>
              </View>
            </View>
            <WebView
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: news.openlink }}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    marginTop: 5,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
  timeTxt: {
    fontSize: 12,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  activityText: {
    fontSize: 14,
    color: '#666',
  },
  video: {
    height: 450, // กำหนดความสูงให้กับ WebView เพื่อแสดงผลวิดีโอ
    marginBottom: 10,
  },
});

export default NewsScreen;

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data_top_keywords = [
  {
    title: 'โทษของบุหรี่ไฟฟ้า',
    data: [
      '#บุหรี่ไฟฟ้าคืออะไร',
      '#ใครสร้างบุหรี่ไฟฟ้า',
      '#ฉันอยากทราบโทษของบุหรี่ไฟฟ้า',
      '#บุหรี่ไฟฟ้าผิดกฏหมายในประเทศไทย',
      '#บุหรี่ไฟฟ้ามีกี่ประเภท',
      '#อันตรายจากควันบุหรี่ไฟฟ้า',
      '#การปฏิเสธเมื่อเพื่อนชวนซื้อบุหรี่ไฟฟ้า',
      '#ควันจากบุหรี่ไฟฟ้าอันตรายมั้ยครับ',
      '#บุหรี่ไฟฟ้าก่อให้โรคเสื่อมสมรรถนะทางเพศ',
      '#มะเร็งปอด',
      '#วิธีเลิกบุหรี่ไฟฟ้า',
      '#สารเเต่งกลิ่นส่งผลต่อสุขภาพหรือไม่',
      '#นิโคติน คืออะไร',
      '#สารก่อมะเร็งในบุหรี่',
    ],
  },
];

const RecommanScreen = () => {
  const navigation = useNavigation();
  const openChatBot = (item) => {
    let txt_fomat = item.slice(1, item.length);
    //เปิดหน้าใหม่พร้อมส่งข้อมูลไปด้วย
    /* Alert.alert(
      "Title",
      txt_fomat
    ) */
    navigation.navigate('Chatbot', { item: txt_fomat });
  };
  return (
    <SafeAreaView style={homeStyle.safeArea}>
      <ScrollView>
        <View style={homeStyle.recomman_screen_container}>
          <View style={homeStyle.top_keyword_box}>
          </View>
          <View>
            <SectionList
              sections={data_top_keywords}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => openChatBot(item)}>
                  <View style={homeStyle.top_key_word_list}>
                    <Text style={homeStyle.key_word_title}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const homeStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  recomman_screen_container: {
    paddingTop: 0,
  },
  top_keyword_box: {
    marginBottom: 20,
    paddingTop:2
  },
  top_key_word_list: {
    backgroundColor: '#FFE052',
    padding: 15,
    marginBottom: 10,
    marginRight: 18,
    marginLeft: 18,
    borderRadius: 12,
  },
  key_word_title: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default RecommanScreen;

import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AboutScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.iconAreaTop}>
          <Image
            style={styles.iconResize}
            source={require('../../../assets/aboutImage/res_sss.png')}
          />
          <Image
            style={styles.iconResize}
            source={require('../../../assets/aboutImage/res_rat.png')}
          />
        </View>
        <View style={styles.setKiddeeIcon}>
          <Image
            style={styles.kiddeeIcon}
            source={require('../../../assets/aboutImage/kiddee.png')}
          />
        </View>
        <View>
          <Text style={styles.setTextContent}>ที่มาเเละความสำคัญ</Text>
          <Text>
            Tunpod AI Application
            ที่ให้คำปรึกษาเกี่ยวกับการป้องกันนักสูบหน้าใหม่ซึ่งพัฒนาโดยนักศึกษาสาขาวิศวกรรมปัญญาประดิษฐ์ประยุกต์
            มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาลัยรัตภูมิ
            ซึ่งได้รับเงินทุนสนับสนุนโดยคิดดีไอดอลสื่อดีมีไอเดีย
          </Text>
        </View>
        <View>
          <Text style={styles.setTextContent}>วัตถุประสงค์</Text>
          <Text style={styles.setFontSize}>1.เพื่อป้องกันนักสูบหน้าใหม่</Text>
          <Text style={styles.setFontSize}>
            2.เพื่อให้ความรู้เกี่ยวกับโทษของบุหรี่ไฟฟ้า
          </Text>
          <Text style={styles.setFontSize}>3.เพื่อ</Text>
        </View>
        <View style={styles.aboutMeContent}>
          <Text style={styles.contact}>ติดต่อ</Text>
          <View style={styles.contactIconList}>
            <TouchableOpacity>
              <Ionicons
                style={styles.setAlignItem}
                name="logo-facebook"
                size={50}
                color="black"
              />
              <Text style={styles.setAlignItem}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                style={styles.setAlignItem}
                name="browsers"
                size={50}
                color="black"
              />
              <Text style={styles.setAlignItem}>Website</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                style={styles.setAlignItem}
                name="logo-instagram"
                size={50}
                color="black"
              />
              <Text style={styles.setAlignItem}>Instagram</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  iconAreaTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconResize: {
    width: 100,
    height: 30,
  },
  kiddeeIcon: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
  setKiddeeIcon: {
    alignItems: 'center',
  },
  setTextContent: {
    fontSize: 16,
    marginTop: 20,
  },
  aboutMeContent: {
    marginTop: 50,
  },
  contact: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contactIconList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  setAlignItem: {
    textAlign: 'center',
    marginTop: 10,
  },
  setFontSize: {
    fontSize: 16,
  },
});

export default AboutScreen;

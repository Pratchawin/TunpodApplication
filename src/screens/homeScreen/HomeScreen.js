import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.pointsContainer}>
          <ScrollView horizontal={true}>
            <View style={styles.setImgScr}>
              <Image
                source={require('../../../assets/home_ads/ads1.png')}
                style={styles.setHomeAds}
              />
            </View>
            <View style={styles.setImgScr}>
              <Image
                source={require('../../../assets/home_ads/ads3.png')}
                style={styles.setHomeAds}
              />
            </View>
            <View style={styles.setImgScr}>
              <Image
                source={require('../../../assets/home_ads/ads2.png')}
                style={styles.setHomeAds}
              />
            </View>
            <View style={styles.setImgScr}>
              <Image
                source={require('../../../assets/home_ads/ads4.png')}
                style={styles.setHomeAds}
              />
            </View>
          </ScrollView>
        </View>
        {/*บริการเพิ่มเติม*/}
        <View style={styles.othMenueItems}>
          <Text style={styles.othTitle}>บริการเพิ่มเติม</Text>
        </View>
        <View style={styles.additionalServices}>
          <ServiceCard
            icon={'calendar-outline'}
            title="รายการประจำวัน"
            screenName="Checkin"
            navigation={navigation}
          />

          <ServiceCard
            icon={'podium-outline'}
            title="อันดับ"
            screenName="Rank"
            navigation={navigation}
          />
          <ServiceCard
            icon={'people-outline'}
            title="เชิญเพื่อน"
            screenName="Friend"
            navigation={navigation}
          />
          <ServiceCard
            icon={'gift-outline'}
            title="เเลกของรางวัล"
            screenName="Gift"
            navigation={navigation}
          />
          <ServiceCard
            icon={'clipboard-outline'}
            title="ประวัติ"
            screenName="History"
            navigation={navigation}
          />
          <ServiceCard
            icon={'help-outline'}
            title="เกี่ยวกับเรา"
            screenName="About"
            navigation={navigation}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const ServiceCard = ({ icon, title, screenName, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
    <View style={styles.homeMenueContainer}>
      <View style={styles.serviceCard}>
        <Ionicons name={icon} size={30} color="black" />
      </View>
      <View>
        <Text style={styles.serviceTitle}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 0,
  },
  setImgScr: {
    marginRight: 10,
    borderRadius: 12,
    height: 200,
    width: 300,
    backgroundColor: '#CBCBCB',
  },
  pointsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  setHomeAds: {
    borderRadius: 12,
  },
  additionalServices: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  homeMenueContainer: {
    marginBottom: 10,
  },
  serviceCard: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: 100,
    backgroundColor: '#FFE052',
  },
  serviceTitle: {
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  othMenueItems: {
    marginTop: 20,
    marginBottom: 10,
  },
  othTitle: {
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});

export default HomeScreen;

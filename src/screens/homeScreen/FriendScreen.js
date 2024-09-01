import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const FriendScreen = ({ codeInvite, points, inviteMessage }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/appImage/tunpod.png')}
          />
        </View>
        <View style={styles.inviteBorder}>
          <Text style={styles.codeInvite}>Vijoy2704</Text>
        </View>
        <Text style={styles.points}>รับ 500 Point</Text>
        <Text style={styles.inviteMessage}>เมื่อเชิญเพื่อนของคุณ</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  card: {
    backgroundColor: '#FFD700', // สีเหลือง
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    margin: 10,
  },
  imageContainer: {
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius:10
  },
  inviteBorder:{
    borderRadius:50,
    backgroundColor:"#fff",
    marginBottom: 10,
    paddingLeft:80,
    paddingRight:80,
    paddingTop:20,
    paddingBottom:20
  },
  codeInvite: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  inviteMessage: {
    fontSize: 14,
    color: '#666',
  },
});

export default FriendScreen;

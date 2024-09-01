import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GiftScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Ionicons name={"timer-outline"} size={50}/>
        <Text style={styles.giftItemTitle}>เร็วๆนี้</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:'#ffff'
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  giftItemTitle:{
    fontSize:20
  }
});

export default GiftScreen;

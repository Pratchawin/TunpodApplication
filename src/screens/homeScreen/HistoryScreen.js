/* import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const HistoryScreen = () => {
  const historyData = [
    { id: 1,status:1,title:'เเต้มเข้า', date: '02/02/67', point: 20 },
    { id: 2,status:0,title:'เเต้มออก', date: '02/02/67', point: 25 },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.historyTitle}>ประวัติการทำรายการ</Text>
        <ScrollView>
          {
            historyData.map((item)=>(
              <HistoryItem
                title={item.title}
                date={item.date}
                point={item.point}
                status={item.status}
              />
            ))
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const HistoryItem = ({title, date, point, status}) => {

  return (
    <View style={styles.historyItem}>
      <View>
        <Text style={styles.hisTitle}>{title}</Text>
        <Text>วันที่ทำรายการ: {date}</Text>
      </View>
      <View>
        <Text style={status==1 ? styles.pointText : styles.pointDel}>{point} P</Text>
      </View>
    </View>
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
  pointText: {
    fontSize:18,
    textAlign: 'right',
    marginTop: 10,
    color:'green',
  },
  historyItem: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'lightgray',
    padding: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  hisTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyTitle:{
    fontSize:18,
    fontWeight:'bold'
  },
  pointDel:{
    fontSize:18,
    marginTop: 10,
    color:'red'
  }
});

export default HistoryScreen;
 */
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HistoryScreen = () => {
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

export default HistoryScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

const RankScreen = () => {
  const ranking = [
    { id: '1', name: 'User101112', points: '500', rank: 4 },
    { id: '2', name: 'User101113', points: '400', rank: 5 },
    { id: '3', name: 'User101114', points: '300', rank: 6 },
    { id: '4', name: 'User101115', points: '200', rank: 7 },
    { id: '5', name: 'User101116', points: '100', rank: 8 },
    { id: '6', name: 'User101117', points: '80', rank: 9 },
    { id: '7', name: 'User101118', points: '70', rank: 10 },
    { id: '8', name: 'User101119', points: '60', rank: 11 },
    { id: '9', name: 'User101110', points: '50', rank: 12 },
    { id: '10', name: 'User101111', points: '40', rank: 13 },
    { id: '11', name: 'User101112', points: '30', rank: 14 },
    { id: '12', name: 'User101113', points: '20', rank: 15 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.subTopUsers}>
              <TopAccountComp
                rank={2}
                points_score={'9,000'}
                username={'Tunpod'}
              />
              <TopAccountComp
                rank={1}
                points_score={'15,000'}
                username={'User415'}
              />
              <TopAccountComp
                rank={3}
                points_score={'2,000'}
                username={'User678'}
              />
            </View>
          </View>
          <View>
            <Text style={styles.topRankTitle}>อันดับของคุณคือ 5</Text>
            <FlatList
              data={ranking}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <RankCard
                  userName={item.name}
                  scorePoints={item.points}
                  rank={item.rank}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
//Component in FlatList
const RankCard = ({ imgAvatar, userName, scorePoints, rank }) => {
  return (
    <View style={styles.rankCard}>
      <Image
        source={require('../../../assets/appImage/user.jpg')}
        style={styles.rankAvatar}
      />
      <View style={styles.rankDetail}>
        <Text style={styles.rankUsername}>{userName}</Text>
        <Text style={styles.rankPoint}>{scorePoints} P</Text>
      </View>
      <Text style={styles.rank}>Rank {rank}</Text>
    </View>
  );
};
//Component Top Rank
const TopAccountComp = ({ rank, profile, points_score, username }) => {
  return (
    <View style={[styles.topUserItem, rank >= 2 && { marginTop: 40 }]}>
      <Text
        style={[
          styles.subTopText,
          rank == 2
            ? { color: '#B1008A' }
            : rank == 3
            ? { color: '#784800' }
            : {},
        ]}>
        Rank {rank}
      </Text>
      <Image
        style={styles.avatar}
        source={require('../../../assets/appImage/user.jpg')}
      />
      <View
        style={[
          styles.showNameAndPoint,
          rank == 2
            ? { backgroundColor: '#B1008A' }
            : rank == 3
            ? { backgroundColor: '#784800' }
            : {},
        ]}>
        <Text style={styles.smallPoints}>{points_score} P</Text>
        <Text style={styles.smallUsername}>{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    paddingRight:16,
    paddingLeft:16
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  subTopUsers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  topUserItem: {
    alignItems: 'center',
  },
  subTopText: {
    fontSize: 12,
    color: 'gold',
    fontWeight: 'bold',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginVertical: 10,
  },
  showNameAndPoint: {
    backgroundColor: 'gold',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
  },
  smallPoints: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  smallUsername: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  topRankTitle: {
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rankCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1abc9c',
    marginVertical: 5,
    borderRadius: 10,
  },
  rankAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  rankDetail: {
    flex: 1,
  },
  rankUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  rank: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default RankScreen;

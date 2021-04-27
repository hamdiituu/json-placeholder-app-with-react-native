import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const UserList = ({users, onPress}) => {
  //console.log(posts);
  return users.map(user => (
    <TouchableOpacity onPress={() => onPress(user.id)} key={user.id}>
      <View style={styles.contaniner}>
        <View>
          <Text style={styles.title}>@{user.username.toLowerCase()}</Text>
          <Text style={styles.body}> {user.name} </Text>
        </View>
        <View>
          <Text style={styles.arrowIcon}>&#8594;</Text>
        </View>
      </View>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  contaniner: {
    margin: 10,
    padding: 10,
    borderBottomWidth: 0.2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  body: {
    color: 'black',
    opacity: 0.5,
  },
  arrowIcon: {
    fontSize: 20,
  },
});

export default UserList;

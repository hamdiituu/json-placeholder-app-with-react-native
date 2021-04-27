import React, {useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import {Loader} from '../../../components/common';
import {UserList} from '../../../components/user';

const Users = ({navigation}) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchUsers = await res.json();
    setUsers(fetchUsers);
  };

  const goToDetail = id => {
    navigation.navigate('UserDetailStack', {userId: id});
  };

  return (
    <ScrollView style={styles.container}>
      {users ? (
        <View>
          <Text style={styles.title}>Users</Text>
          <UserList users={users} onPress={goToDetail} />
        </View>
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 30,
  },
});

export default Users;

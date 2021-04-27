import React, {useState, useEffect, useLayoutEffect} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import {Loader} from '../../components/common';
import {CommentList} from '../../components/comment';

const UserDetail = ({route}) => {
  const {userId} = route.params;

  useLayoutEffect(() => {
    fetchGetByIdUser(userId);
    fetchGetByIdComments(userId);
  }, [userId]);

  useEffect(() => {
    if (user && comments) {
      setReady(true);
    }
  }, [user, comments]);

  const [user, setUser] = useState();
  const [comments, setComments] = useState();
  const [isReady, setReady] = useState(false);

  const fetchGetByIdUser = async id => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const fetchUser = await res.json();
    setUser(fetchUser);
  };

  const fetchGetByIdComments = async id => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/comments`,
    );
    const fetchComments = await res.json();
    setComments(fetchComments);
  };

  return (
    <ScrollView style={styles.container}>
      {user ? (
        <View>
          <Text style={styles.title}>@{user.username.toLowerCase()}</Text>
          <Text style={styles.detailData}>{user.name}</Text>
          <Text style={styles.detailData}>{user.email}</Text>
          <Text style={styles.detailData}>{user.phone}</Text>
          <Text style={styles.detailData}>{user.website}</Text>
          <Text style={styles.commentsTitle}>
            @{user.username.toLowerCase()} in Commnets
          </Text>
        </View>
      ) : (
        <Loader />
      )}
      {comments ? <CommentList comments={comments} /> : <Loader />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    marginLeft: 12,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },
  body: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: '200',
    marginTop: 12,
    marginBottom: 25,
  },
  commentsTitle: {
    marginLeft: 12,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
  },
  detailData: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: '200',
    marginTop: 12,
  },
});

export default UserDetail;

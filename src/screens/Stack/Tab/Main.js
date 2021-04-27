import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Loader} from '../../../components/common';
import {CardList} from '../../../components/post';
const Main = ({navigation}) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const fetchPosts = await res.json();
    setPosts(fetchPosts);
  };

  const goToDetail = id => {
    navigation.navigate('PostDetailStack', {postId: id});
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {posts ? (
        <View>
          <Text style={styles.title}>Posts</Text>
          <CardList onPress={goToDetail} posts={posts} />
        </View>
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 30,
  },
});

export default Main;

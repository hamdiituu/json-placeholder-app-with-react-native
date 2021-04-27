import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const CardList = ({posts, onPress}) => {
  //console.log(posts);
  return posts.map(post => (
    <TouchableOpacity onPress={() => onPress(post.id)} key={post.id}>
      <View style={styles.contaniner}>
        <Text style={styles.title}>{post.title.toUpperCase()}</Text>
        <Text style={styles.body}> {post.body} </Text>
      </View>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  contaniner: {
    margin: 10,
    padding: 10,
    borderBottomWidth: 0.2,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  body: {
    color: 'black',
    opacity: 0.5,
  },
});

export default CardList;

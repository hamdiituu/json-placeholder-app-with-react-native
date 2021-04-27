import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yükleniyor..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'red',
    textAlign: 'center',
    fontSize: 24,
    marginTop: windowHeight / 2 - 70,
  },
});

export default Loader;

import * as React from 'react';
import AppNavigator from './navigator';
import {SafeAreaView} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;

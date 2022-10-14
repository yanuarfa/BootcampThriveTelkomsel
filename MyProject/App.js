import {View, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 100,
        padding: 20,
        flex: 1,
      }}>
      <View style={{backgroundColor: 'blue', flex: 3}}>
        <Text>Container 1</Text>
      </View>
      <View style={{backgroundColor: 'red', flex: 1}}>
        <Text>Container 1</Text>
      </View>
    </View>
  );
};

export default App;

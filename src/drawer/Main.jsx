import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import BottomNavigator from '../bottom/BottomNavigator';

const Main = () => {
  useEffect(() => {
    console.log(343244288);
  }, []);

  return (
  <View style={{flex:1}}>
    <BottomNavigator/>
  </View>
  );
};

export default Main;

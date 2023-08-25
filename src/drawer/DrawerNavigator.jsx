import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Main" drawerContent={props=> <CustomDrawer {...props}/>}>
      <Drawer.Screen name="Main" component={Main} options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
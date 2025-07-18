import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{
          title: 'Vachanamrut',
          drawerLabel: 'Home',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

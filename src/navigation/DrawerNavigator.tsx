import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Notes from '../screens/Home/Notes/Notes';
import Search from '../screens/Home/Notes/Search/Search';

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
        name="Notes"
        component={Notes}
        options={{
          title: 'Vachanamrut',
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Vachanamrut',
          drawerLabel: 'Home',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

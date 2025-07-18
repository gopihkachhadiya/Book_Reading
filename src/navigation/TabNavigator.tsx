import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Declare module to fix TypeScript error

// Import your screens
import LastVisited from '../screens/LastVisited/LastVisited';
import Notes from '../screens/Notes/Notes';
import { colors } from '../constants/color';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#4a90e2',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tab.Screen
        name="Vachanamrut"
        component={Notes}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="book" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Last Visited"
        component={LastVisited}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="history" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    height: 60,
    paddingBottom: 5,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default TabNavigator;

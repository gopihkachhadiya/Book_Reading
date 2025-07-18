import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        {/* <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode="contain"
        /> */}
        <Text>Hii</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    marginTop: -4,
  },
  logo: {
    width: 120,
    height: 120,
  },
});

export default CustomDrawerContent;

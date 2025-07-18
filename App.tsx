import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigator';

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <DrawerNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

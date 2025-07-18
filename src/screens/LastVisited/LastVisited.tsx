import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LastVisited = () => {
  return (
    <View style={styles.container}>
      <Text>Last Visited</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LastVisited;
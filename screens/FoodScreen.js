import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FoodScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Food Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#4b0082',
  },
});

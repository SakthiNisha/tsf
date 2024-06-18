import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BookingDetailsScreen({ route }) {
  const { fromValue, toValue, selectedVehicle } = route.params;
  const navigation = useNavigation();

  const handleBookAnotherRide = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Tabs', screen: 'Ride' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Details</Text>
      <Text style={styles.text}>From: {fromValue}</Text>
      <Text style={styles.text}>To: {toValue}</Text>
      <Text style={styles.text}>Vehicle: {selectedVehicle.type}</Text>
      <Text style={styles.text}>Seats: {selectedVehicle.seat}</Text>
      <Text style={styles.text}>Price: ${selectedVehicle.price}</Text>

      <TouchableOpacity
        style={styles.link}
        onPress={handleBookAnotherRide}
      >
        <Text style={styles.linkText}>Book Another Ride</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  link: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4b0082',
    borderRadius: 5,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
});

import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const BookingDetailsScreen = ({ route, navigation }) => {
  const { fromValue, toValue, selectedVehicle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Booking Details</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>From:</Text>
          <Text style={styles.value}>{fromValue}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>To:</Text>
          <Text style={styles.value}>{toValue}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Vehicle Type:</Text>
          <Text style={styles.value}>{selectedVehicle.type}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Seats:</Text>
          <Text style={styles.value}>{selectedVehicle.seat}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.value}>${selectedVehicle.price}</Text>
        </View>
        
      </View>

      <Button
        title="Book Another Ride"
        onPress={() => {
          // Handle confirmation logic here
          navigation.reset({
            index: 0,
            routes: [{ name: 'Tabs', screen: 'Ride' }],
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4b0082',
  },
  value: {
    fontSize: 18,
    color: '#4b0082',
  },
  vehicleImage: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default BookingDetailsScreen;

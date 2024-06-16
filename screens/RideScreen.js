import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const locations = [
  { label: 'Uchippuli', value: 'uchippuli' },
  { label: 'Perumkulam', value: 'perumkulam' },
  { label: 'Ramanathapuram', value: 'ramanathapuram' },
  { label: 'Irumeni', value: 'irumeni' },
  { label: 'Mandapam', value: 'mandapam' },
];

const vehicles = [
  { type: 'Sedan', price: 50 },
  { type: 'SUV', price: 40 },
  { type: 'Van', price: 30 },
  { type: 'Auto', price: 70 },
];

export default function RideScreen() {
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);
  const [showVehicles, setShowVehicles] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleSearch = () => {
    if (fromValue && toValue) {
      setShowVehicles(true);
      setSelectedVehicle(null); // Clear previously selected vehicle
    } else {
      alert('Please select both "From" and "To" locations');
    }
  };

  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleConfirmPickup = () => {
    if (selectedVehicle) {
      Alert.alert(
        'Pickup Confirmed',
        `You have chosen a ${selectedVehicle.type} for $${selectedVehicle.price}.`,
        [
          {
            text: 'OK',
            onPress: () => {
              setFromValue(null);
              setToValue(null);
              setShowVehicles(false);
              setSelectedVehicle(null);
            },
          },
        ]
      );
    } else {
      alert('Please select a vehicle');
    }
  };

  const renderVehicleItem = ({ item }) => (
    <View style={styles.vehicleItem}>
      <Text style={styles.vehicleText}>{item.type}</Text>
      <Text style={styles.vehiclePrice}>{item.price} $</Text>
      <Button title="Select" onPress={() => handleSelectVehicle(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ride Booking</Text>

      <DropDownPicker
        open={fromOpen}
        value={fromValue}
        items={locations}
        setOpen={setFromOpen}
        setValue={setFromValue}
        placeholder="From"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />

      <DropDownPicker
        open={toOpen}
        value={toValue}
        items={locations}
        setOpen={setToOpen}
        setValue={setToValue}
        placeholder="To"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />

      <Button title="Search" onPress={handleSearch} />

      {showVehicles && (
        <FlatList
          data={vehicles}
          renderItem={renderVehicleItem}
          keyExtractor={(item) => item.type}
          style={styles.vehicleList}
        />
      )}

      {selectedVehicle && (
        <View style={styles.confirmPickupContainer}>
          <Button title="Confirm Pickup" onPress={handleConfirmPickup} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#4b0082',
    textAlign: 'center',
    marginBottom: 20,
  },
  dropdown: {
    marginBottom: 10,
  },
  dropdownContainer: {
    borderColor: '#4b0082',
  },
  vehicleList: {
    marginTop: 20,
  },
  vehicleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  vehicleText: {
    fontSize: 18,
    color: '#4b0082',
  },
  vehiclePrice: {
    fontSize: 18,
    color: '#4b0082',
  },
  confirmPickupContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

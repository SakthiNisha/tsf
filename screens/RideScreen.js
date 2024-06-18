import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const locations = [
  { label: 'Uchippuli', value: 'uchippuli' },
  { label: 'Perumkulam', value: 'perumkulam' },
  { label: 'Ramanathapuram', value: 'ramanathapuram' },
  { label: 'Irumeni', value: 'irumeni' },
  { label: 'Mandapam', value: 'mandapam' },
];

const vehicles = [
  { image: '../assets/sedan4.jpg', seat: 4, type: 'Sedan', price: 50 },
  { image: '../assets/suv1.jpg', seat: 7, type: 'SUV', price: 40 },
  { image: '../assets/van.jpg', seat: 15, type: 'Van', price: 30 },
  { image: '../assets/auto2.jpg', seat: 3, type: 'Auto', price: 70 },
];

const images = {
  '../assets/van.jpg': require('../assets/van.jpg'),
  '../assets/sedan4.jpg': require('../assets/sedan4.jpg'),
  '../assets/auto2.jpg': require('../assets/auto2.jpg'),
  '../assets/suv1.jpg': require('../assets/suv1.jpg'),
  // Add more images here if needed
};

export default function RideScreen() {
  const navigation = useNavigation();
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);
  const [showVehicles, setShowVehicles] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleSearch = () => {
    if (fromValue && toValue) {
      setShowVehicles(true);
      setSelectedVehicle(null);
    } else {
      alert('Please select both "From" and "To" locations');
    }
  };

  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleConfirmPickup = () => {
    if (selectedVehicle) {
      navigation.navigate('BookingDetails', {
        fromValue,
        toValue,
        selectedVehicle,
      });
    } else {
      alert('Please select a vehicle');
    }
  };

  useFocusEffect(
    useCallback(() => {
      setFromValue(null);
      setToValue(null);
      setShowVehicles(false);
      setSelectedVehicle(null);
      setFromOpen(false);
      setToOpen(false);
    }, [])
  );

  const renderVehicleItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleSelectVehicle(item)}
      style={[
        styles.vehicleItem,
        selectedVehicle?.type === item.type && styles.selectedVehicleItem,
      ]}
    >
      <Image
        source={images[item.image]}
        style={styles.vehicleImage}
      />
      <View style={styles.vehicleDetails}>
        <Text style={styles.vehicleText}>{item.type}</Text>
        <Text style={styles.vehicleText}>{item.seat} Seat</Text>
        <Text style={styles.vehiclePrice}>{item.price} $</Text>
      </View>
    </TouchableOpacity>
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
        style={[styles.dropdown, { zIndex: 2000 }]}
        dropDownContainerStyle={[styles.dropdownContainer, { zIndex: 2000 }]}
        onOpen={() => setToOpen(false)}
        labelStyle={styles.dropdownLabel}
        placeholderStyle={styles.dropdownPlaceholder}
        arrowIconStyle={styles.dropdownArrow}
      />

      <DropDownPicker
        open={toOpen}
        value={toValue}
        items={locations}
        setOpen={setToOpen}
        setValue={setToValue}
        placeholder="To"
        style={[styles.dropdown, { zIndex: 1000 }]}
        dropDownContainerStyle={[styles.dropdownContainer, { zIndex: 1000 }]}
        onOpen={() => setFromOpen(false)}
        labelStyle={styles.dropdownLabel}
        placeholderStyle={styles.dropdownPlaceholder}
        arrowIconStyle={styles.dropdownArrow}
      />

      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {showVehicles && <Text style={styles.vehicleHeaderText}>Choose a Ride</Text>}

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
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPickup}>
            <Text style={styles.confirmButtonText}>Confirm Pickup</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#4b0082',
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  dropdown: {
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    borderColor: '#4b0082',
    borderRadius: 10,
  },
  dropdownContainer: {
    borderColor: '#4b0082',
  },
  dropdownLabel: {
    color: '#4b0082',
    fontWeight: 'bold',
  },
  dropdownPlaceholder: {
    color: '#999',
  },
  dropdownArrow: {
    tintColor: '#4b0082',
  },
  searchButton: {
    backgroundColor: '#4b0082',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  vehicleHeaderText: {
    fontSize: 22,
    color: '#4b0082',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  vehicleList: {
    marginTop: 10,
  },
  vehicleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginVertical: 5,
  },
  selectedVehicleItem: {
    backgroundColor: '#e0e0e0',
  },
  vehicleImage: {
    width: 90,
    height: 40,
  },
  vehicleDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  vehicleText: {
    fontSize: 18,
    color: '#4b0082',
    fontWeight: 'bold',
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
  confirmButton: {
    backgroundColor: '#4b0082',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

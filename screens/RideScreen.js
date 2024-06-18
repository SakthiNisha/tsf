import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
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
  { image: require('../assets/sedan4.jpg'), seat: 4, type: 'Sedan', price: 50 },
  { image: require('../assets/suv1.jpg'), seat: 7, type: 'SUV', price: 40 },
  { image: require('../assets/van.jpg'), seat: 15, type: 'Van', price: 30 },
  { image: require('../assets/auto2.jpg'), seat: 3, type: 'Auto', price: 70 },
];

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
        source={item.image}
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
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        zIndex={2000} // Higher zIndex for 'From' dropdown
        onChangeValue={() => setToOpen(false)} // Close 'To' dropdown when 'From' is changed
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
        zIndex={1000} // Lower zIndex for 'To' dropdown
        onChangeValue={() => setFromOpen(false)} // Close 'From' dropdown when 'To' is changed
      />

      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {showVehicles && (
        <FlatList
          data={vehicles}
          renderItem={renderVehicleItem}
          keyExtractor={(item) => item.type}
          style={styles.vehicleList}
        />
      )}

      {selectedVehicle && (
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPickup}>
          <Text style={styles.confirmButtonText}>Confirm Pickup</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
    fontWeight: 'bold',
  },
  dropdown: {
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  dropdownContainer: {
    borderColor: '#4b0082',
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
  vehicleList: {
    marginTop: 20,
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
  confirmButton: {
    backgroundColor: '#4b0082',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

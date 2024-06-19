import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Dummy data for booking history
const dummyData = [
  { id: '1', date: '2024-06-15', from: 'Uchippuli', to: 'Perumkulam', vehicle: 'Sedan', price: 50 },
  { id: '2', date: '2024-06-14', from: 'Ramanathapuram', to: 'Irumeni', vehicle: 'SUV', price: 40 },
  { id: '3', date: '2024-06-13', from: 'Mandapam', to: 'Uchippuli', vehicle: 'Van', price: 30 },
  { id: '4', date: '2024-06-12', from: 'Perumkulam', to: 'Ramanathapuram', vehicle: 'Auto', price: 70 },
];

const BookingHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Booking History</Text>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeaderCell, styles.cell]}>Date</Text>
          <Text style={[styles.tableHeaderCell, styles.cell]}>From - To</Text>
          <Text style={[styles.tableHeaderCell, styles.cell]}>Vehicle</Text>
          <Text style={[styles.tableHeaderCell, styles.cell]}>Price</Text>
        </View>
        {dummyData.map(item => (
          <View key={item.id} style={styles.tableRow}>
            <Text style={styles.cell}>{item.date}</Text>
            <Text style={styles.cell}>{item.from} - {item.to}</Text>
            <Text style={styles.cell}>{item.vehicle}</Text>
            <Text style={styles.cell}>${item.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#4b0082',
    textAlign: 'center',
  },
  tableContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    color: '#4b0082',
    flex: 1,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    color: '#4b0082',
  },
});

export default BookingHistoryScreen;

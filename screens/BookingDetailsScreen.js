import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const BookingDetailsScreen = ({ route, navigation }) => {
    const { fromValue, toValue, selectedVehicle, driverLocation, driverName } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Driver:</Text>
                        <Text style={styles.value}>{driverName}</Text>
                    </View>
                </View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: driverLocation.latitude,
                        longitude: driverLocation.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker coordinate={driverLocation} title="Driver Location" />
                </MapView>
                <Button
                    title="Book Another Ride"
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Tabs', screen: 'Ride' }],
                        });
                    }}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
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
    map: {
        width: '100%',
        height: 300,
        marginBottom: 20,
    },
});

export default BookingDetailsScreen;

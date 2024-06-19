import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AccountInformationScreen = () => {
  // Dummy initial user information (replace with actual user data)
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    phoneNumber: '1234567890',
    address: '123 Main St, City, Country',
  });

  const [editing, setEditing] = useState(false); // State to track if editing mode is active

  // Function to handle saving edited information
  const saveChanges = () => {
    // Implement logic to save changes (e.g., send to backend)
    setEditing(false); // Disable editing mode after saving
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account Information</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Name:</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={userInfo.name}
            onChangeText={(text) => setUserInfo({ ...userInfo, name: text })}
          />
        ) : (
          <Text style={styles.value}>{userInfo.name}</Text>
        )}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Phone Number:</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={userInfo.phoneNumber}
            onChangeText={(text) => setUserInfo({ ...userInfo, phoneNumber: text })}
          />
        ) : (
          <Text style={styles.value}>{userInfo.phoneNumber}</Text>
        )}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Address:</Text>
        {editing ? (
          <TextInput
            style={[styles.input, { height: 100 }]} // Example: multi-line input for address
            multiline
            numberOfLines={4}
            value={userInfo.address}
            onChangeText={(text) => setUserInfo({ ...userInfo, address: text })}
          />
        ) : (
          <Text style={styles.value}>{userInfo.address}</Text>
        )}
      </View>

      {/* Edit and Save buttons */}
      {editing ? (
        <TouchableOpacity style={styles.button} onPress={saveChanges}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => setEditing(true)}>
          <Text style={styles.buttonText}>Edit Information</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4b0082',
    textAlign: 'center',
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4b0082',
  },
  value: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4b0082',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default AccountInformationScreen;

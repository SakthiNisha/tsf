import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../UserContext';

const ProfileScreen = ({ navigation }) => {
  const { userPhone, userName, userAddress, updateUserDetails } = useContext(UserContext);
  const [name, setName] = useState(userName);
  const [address, setAddress] = useState(userAddress);
  const [phone, setPhone] = useState(userPhone);

  useEffect(() => {
    setPhone(userPhone);
  }, [userPhone]);

  const handleUpdate = () => {
    updateUserDetails(name, address, phone);
    navigation.navigate('Home'); // Navigate back to home or any other screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        editable={false} // Disable editing as it's already provided during signup
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ProfileScreen;

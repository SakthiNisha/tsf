import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { AuthContext } from '../AuthContext';

export default function SignupScreen({ navigation }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const { login } = useContext(AuthContext);

  const handleSignup = () => {
    if (mobileNumber.length === 10) {
      login();
      Alert.alert('Signup Successful', `You have signed up with mobile number: ${mobileNumber}`);
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid Mobile Number', 'Please enter a valid 10-digit mobile number.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup with Mobile Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#4b0082',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../UserContext';
const OtpScreen = ({ route, navigation }) => {
  const { phone } = route.params;
  const [otp, setOtp] = useState('');
  const { login } = useContext(UserContext);

  const handleOtpSubmit = () => {
    // You can add your OTP verification logic here
    if (otp === '1234') { // Simulating successful OTP verification
      login(phone);
      navigation.navigate('Profile', { phone });
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter the OTP sent to {phone}</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
      />
      <Button title="Submit OTP" onPress={handleOtpSubmit} />
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

export default OtpScreen;

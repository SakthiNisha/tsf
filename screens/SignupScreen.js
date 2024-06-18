import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../UserContext';

const SignupScreen = ({ navigation }) => {
  const { login } = useContext(UserContext);
  const [phone, setPhone] = useState('');

  const handleSignup = () => {
   // login(phone);
    navigation.navigate('Otp', { phone }); // Navigate to OTP screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your phone number</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button title="Signup" onPress={handleSignup} />
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

export default SignupScreen;

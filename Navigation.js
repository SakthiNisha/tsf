import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyTabs from './TabNavigation';
import SignupScreen from './screens/SignupScreen';
import OtpScreen from './screens/OtpScreen';
import ProfileScreen from './screens/ProfileScreen';
import RideScreen from './screens/RideScreen';
import BookingDetailsScreen from './screens/BookingDetailsScreen';
import AccountInformationScreen from './screens/AccountInformation';
import BookingHistoryScreen from './screens/BookingHistory';
import { UserContext, UserProvider } from './UserContext';

const Stack = createStackNavigator();

const CustomHeaderTitle = () => (
  <View style={styles.headerTitleContainer}>
    <Image
      source={require('./assets/logo.jpg')}
      style={styles.logo}
    />
    <Text style={styles.headerTitle}>AllWays</Text>
  </View>
);

function MyStack() {
  const { isLoggedIn, logout } = React.useContext(UserContext);

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#4b0082' },
        headerTintColor: '#fff',
        headerTitle: () => <CustomHeaderTitle />,
        headerTitleAlign: 'center',
        headerLeft: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {navigation.canGoBack() && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={30} color="#fff" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            )}
          </View>
        ),
        headerRight: () => (
          isLoggedIn ? (
            <TouchableOpacity onPress={logout}>
              <Icon name="logout" size={30} color="#fff" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Icon name="person-add" size={30} color="#fff" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          )
        ),
      })}
    >
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} />
      <Stack.Screen name="AccountInformation" component={AccountInformationScreen} />
      <Stack.Screen name="BookingHistory" component={BookingHistoryScreen} />
      <Stack.Screen name="RideScreen" component={RideScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    textTransform: 'uppercase', // Example: transform text to uppercase
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25, // Example: make logo circular
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#fff', // Example: add border around logo
  },
});

export default function Navigation() {
  return (
    <UserProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </UserProvider>
  );
}

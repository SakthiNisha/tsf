import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyTabs from './TabNavigation';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookingDetailsScreen from './screens/BookingDetailsScreen'; // Import the BookingDetailsScreen
import { UserContext, UserProvider } from './UserContext';

const Stack = createStackNavigator();

function MyStack() {
  const { isLoggedIn } = React.useContext(UserContext);

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#4b0082' }, // Royal purple background
        headerTintColor: '#fff', // White text color
        headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Image
            source={require('./assets/logo.jpg')} // Path to your logo
            style={{ width: 50, height: 50, marginLeft: 10 }}
          />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate(isLoggedIn ? 'Profile' : 'Signup')}>
            <Icon
              name={isLoggedIn ? "user" : "user-circle"} // Change icon based on login state
              size={30}
              color="#fff"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen 
        name="Tabs" 
        component={MyTabs} 
        options={{
          headerTitle: 'Think Smart Further',
        }}
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{
          headerTitle: 'Signup',
        }}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          headerTitle: 'Profile',
        }}
      />
      <Stack.Screen 
        name="BookingDetails" 
        component={BookingDetailsScreen} 
        options={{
          headerTitle: 'Booking Details',
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <UserProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </UserProvider>
  );
}

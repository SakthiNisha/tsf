import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, TouchableOpacity } from 'react-native';
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

function MyStack() {
  const { isLoggedIn, logout } = React.useContext(UserContext);

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#4b0082' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
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
      <Stack.Screen 
        name="Tabs" 
        component={MyTabs} 
        options={{ headerTitle: 'AllWays' }}
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{ headerTitle: 'AllWays' }}
      />
      <Stack.Screen 
        name="Otp"
        component={OtpScreen}
        options={{ headerTitle: 'AllWays' }}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ headerTitle: 'AllWays' }}
      />
      <Stack.Screen 
        name="BookingDetails" 
        component={BookingDetailsScreen} 
        options={{ headerTitle: 'AllWays' }}
      />
      <Stack.Screen 
        name="AccountInformation" 
        component={AccountInformationScreen} 
        options={{ headerTitle: 'AllWays' }}
      />
      <Stack.Screen 
        name="BookingHistory" 
        component={BookingHistoryScreen} 
        options={{ headerTitle: 'AllWays' }}
      />
      <Stack.Screen 
        name="RideScreen" 
        component={RideScreen} 
        options={{ headerTitle: 'AllWays' }}
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

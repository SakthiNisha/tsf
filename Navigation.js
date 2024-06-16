import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyTabs from './TabNavigation';
import SignupScreen from './screens/SignupScreen';
import { UserContext, UserProvider } from './UserContext';

const Stack = createStackNavigator();

function MyStack() {
  const { isLoggedIn } = React.useContext(UserContext);

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={MyTabs} 
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#4b0082' }, // Royal purple background
          headerTintColor: '#fff', // White text color
          headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          headerTitle: 'TSF',
          headerLeft: () => (
            <Image
              source={require('./assets/tsf.jpeg')} // Path to your logo
              style={{ width: 30, height: 30, marginLeft: 10 }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Icon
                name={isLoggedIn ? "user" : "user-plus"} // Change icon based on login state
                size={30}
                color="#fff"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{
          headerStyle: { backgroundColor: '#4b0082' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          headerTitle: 'Signup',
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

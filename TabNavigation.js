import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import RideScreen from './screens/RideScreen';
import FoodScreen from './screens/FoodScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import { UserContext } from './UserContext';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { isLoggedIn, isProfileUpdated } = useContext(UserContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

         // console.log(route.name);
          if (route.name === 'Ride') {
            iconName = 'home';
          } else if (route.name === 'Food') {
            iconName = 'cart';
          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'setting') {
            iconName = 'cog';
          }

          return <Icon name={iconName} size={focused ? 35 : 30} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#d1c4e9',
        tabBarStyle: {
          backgroundColor: '#4b0082', // Royal purple background
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={(isLoggedIn && isProfileUpdated) ? RideScreen : SignupScreen}
        options={{ headerShown: false }}
      />
      
      <Tab.Screen
        name="Food"
        component={FoodScreen}
      />
      <Tab.Screen
        name="setting"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

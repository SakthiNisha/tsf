import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RideScreen from './screens/RideScreen';
import FoodScreen from './screens/FoodScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Ride') {
            iconName = 'car';
          } else if (route.name === 'Food') {
            iconName = 'utensils';
          }

          return <Icon name={iconName} size={focused ? 30 : 25} color={color} />;
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
      <Tab.Screen name="Ride" component={RideScreen} />
      <Tab.Screen name="Food" component={FoodScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;

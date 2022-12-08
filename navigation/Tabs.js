import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, View, Text} from 'react-native';
import Cart from '../nav_screens/Cart';
import Home from '../nav_screens/Home';
import Profile from '../nav_screens/Profile';
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'orange',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 70,
          shadowColor: 'green',
          shadowOffset: {width: 0, height: 30},
        },
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
              <Image
                source={require('../screens/assets/profile.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
              <Image
                source={require('../screens/assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
              <Image
                source={require('../screens/assets/cart.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

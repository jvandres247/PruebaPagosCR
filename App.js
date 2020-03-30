import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  YellowBox
} from 'react-native';

import WebView from './Pages/WebView'
import PayPal from './Pages/PayPal'
import Stripe from './Pages/Stripe'

import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

console.disableYellowBox = true;

const TabNavigator = createMaterialBottomTabNavigator(
  {
    WebView: {
      screen: WebView,
      navigationOptions: {
        
      }
    },
    PayPal: {
      screen: PayPal,
      navigationOptions: {
        /* tabBarIcon: ({ tintColor }) => (
          <View>
             <Text>a</Text>
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: '#2163f6' }, */
      }
    },
    Stripe: {
      screen: Stripe,
      navigationOptions: {
        // tabBarIcon: ({ tintColor }) => (
        //   <View>
        //      <Text>a</Text>
        //   </View>
        // ),
        // activeColor: '#ffffff',
        // inactiveColor: '#92c5c2',
        // barStyle: { backgroundColor: '#2c6d6a' },
      }
    }
  },
  {
    initialRouteName: 'WebView',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
    
  }
);


export default createAppContainer(TabNavigator);
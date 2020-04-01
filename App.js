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

import TestWebView from './Pages/TestWebView'
import PayPal from './Pages/PayPal'
import TestStripe from './Pages/TestStripe'

import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

console.disableYellowBox = true;

const TabNavigator = createMaterialBottomTabNavigator(
  {
    TestWebView: {
      screen: TestWebView,
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
    TestStripe: {
      screen: TestStripe,
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
    initialRouteName: 'TestWebView',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
    
  }
);


export default createAppContainer(TabNavigator);
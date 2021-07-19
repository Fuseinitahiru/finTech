// In App.js in a new project

import * as React from 'react';
import { View, Text ,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import signUpScreen from './screens/signUp';
import DetailsScreen from './screens/details';
import TransactionsScreen from './screens/transactions';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Sign-Up" component={signUpScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Transaction" component={TransactionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
import React from 'react';
import { View, Text ,Button, } from 'react-native';


export default function TransactionsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Transaction Screen</Text>
        <Button
          title="             they         "
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
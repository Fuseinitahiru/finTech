import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet,Button, Text, View, Image ,TextInput,Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const {width: WIDTH} = Dimensions.get('window')


export default function signUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Image source={require('./../img/undrawbtc.png')} 
     style={{width: 200, height: 200, borderRadius:100}} 
    /> 
    <Text style={styles.logoText}>The Bank</Text>
     <View>
       <Ionicons name="mail-outline" size={32} 
       style={styles.inputIcon} />
       <TextInput
         
         style={styles.input}
         placeholder={'username@gmail.com'}
         placeholderTextColor={'black'}
       />
       
     </View>
     <View>
      <Ionicons name="ios-lock-closed" size={32} 
       style={styles.inputIcon} />
       <TextInput
         
         style={styles.input2}
         placeholder={'Password'}
         secureTextEntry={true}
         placeholderTextColor={'Black'}
       />
       <TouchableOpacity style={styles.btnEye}>
         <Ionicons name={"ios-eye-outline"} size={32
        } />
       </TouchableOpacity>
     </View>
     <TouchableOpacity style={styles.btnLogin}
       onPress={(onPress) => navigation.navigate('Details')}>
        <Text style={styles.textLogin}>Login</Text>
       </TouchableOpacity>
     <View style={styles.miscContainer }>
         <Text style={styles.signUp}>SignUp</Text>
         <Text style={styles.forgotPass}>Forgot Password</Text>
       
     </View>
     
 </View>
    
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f0fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 40,
    marginBottom:50,
  },
  input: {
    width: WIDTH  - 55,
    height: 70,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: 'white',
    color: 'blue',
    marginHorizontal:25,
    paddingLeft: 60,
    marginBottom: 30,
    
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 40,
    
  },
  input2: {
    width: WIDTH  - 55,
    height: 70,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: 'white',
    color: 'blue',
    marginHorizontal:25,
    paddingLeft: 60,
  },
  btnEye: {
    position: 'absolute',
    top: 10,
    right: 40,
    
  },
  btnLogin: {
     width : WIDTH -55,
     height: 45,
     borderRadius: 25,
     backgroundColor: '#0d0f35',
     justifyContent: 'center',
    marginTop: 20,
  },
  textLogin: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  miscContainer : {
      width: WIDTH  - 55,
      height: 70,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop : 20,
      
    },
    signUp : {
        fontSize: 15,
    },
    forgotPass : {
        fontSize: 15
    }
 
});

import React from 'react';
import { View, Text ,Button ,StyleSheet,Dimensions,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const {width: WIDTH} = Dimensions.get('window')

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
            <Image source={require('./../img/account.png')} style={{height:150,width:150, marginTop:30, justifyContent:"center",alignSelf:"center" }} />
                <Text style={{fontSize:20 ,marginTop:10, justifyContent:"center",alignSelf:"center"}}>Hira Riaz</Text>
                <Text style={{fontSize:15 ,marginTop:5, justifyContent:"center",alignSelf:"center"}}>UX/UI Designer</Text>
                <View style={{flexDirection: "row" ,alignSelf:"center", justifyContent:"center", marginTop:10, }}>
                  <View> 
                      <Text style={{fontSize:23}}>$8900</Text>
                      <Text>Income</Text>
                  </View>
                  
                  <View style={{marginLeft: 50 , marginRight:50}}> 
                      <Text style={{fontSize:23}}> $5500</Text>
                      <Text>Expenses</Text>
                  </View>
                  <View> 
                      <Text style={{fontSize:23}}>$890</Text>
                      <Text>Loan</Text>
                  </View>
                  
                </View>
            </View>
            <View style={styles.middleContainer}>
                <Text style={{fontSize:40, fontWeight:'bold',marginLeft: 10}}>Overview</Text>
                <Ionicons name="ios-alarm-outline" size={32} style={{margin:8}} />



            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.sent}>

                </View>
                <View style={styles.receive}>

                </View>
                <View style={styles.loan}>

                </View>
                


            </View>
            <View style={styles.menu}>


            </View>
        </View>
     
    );
  }

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#e9f0fb',
    alignItems: 'center',
    justifyContent: 'center',

  },

  profileContainer : {
    width: WIDTH  - 55, 
    height:300, 
    backgroundColor: '#fff',
    alignItems:'center',
    borderRadius: 40,
    

  },
  middleContainer : {
    width: WIDTH  - 55, 
    height:70,
    marginTop: 15,
    flexDirection: 'row',
    
  },
  bottomContainer : {
    width: WIDTH  - 55, 
    height:300, 
    backgroundColor: '#fff',
    alignItems:'flex-start',
    borderRadius: 40,
  },
  sent : {
    marginTop: 10,
    width: WIDTH  - 55, 
    height:70, 
    backgroundColor: '#000',
    borderRadius: 40,

  },
  receive : {

  },
  loan : {

  },
});













  /* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Details Screen</Text>
  <Button
    title="               Login                "
    onPress={() => navigation.navigate('Transaction')}
  />
</View> */

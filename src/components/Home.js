
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
const  Home = ({navigation}) => {
    return (
      <View style={styles.Homecopycontainer}>
      <View style={styles.HomeBtn}>
      <Button onPress={() =>navigation.navigate('Details')} title='Next Screen' ></Button>
      </View>
    </View>
    );
  };
 export default Home 

 const styles = StyleSheet.create({
  Homecopycontainer: {
      width:"100%",
      height:"100%",
    
  },
  HomeBtn: {
    marginTop:650,
    width:100,
    height:50,
    marginLeft:285,
    
  }
})
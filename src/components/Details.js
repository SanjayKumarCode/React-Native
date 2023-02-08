import { StyleSheet, Text, View,Button, Image, } from 'react-native'
import React from 'react'

const  Details = ({navigation}) =>  {
  return (
    
    <View style={styles.Container}>
   <View  style={styles.ImgPic}>
      <Image
          style={styles.QuestionMark}
          source={{
            uri: 'https://cdn.shopify.com/app-store/listing_images/93c0c14436e7b12aaff5d3a1d309e4f6/desktop_screenshot/CJi5wpu7i_MCEAE=.png?height=900&width=1600',
          }}
        />
        </View>
      <View style={styles.DetailsBtn}>
      <Button onPress={() =>navigation.navigate('Product')} title='Third Screen'></Button>
</View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  Container : {
    width:"100%",
    height:"100%",
  },
  ImgPic: {
height:500,
width:400,
flex:1,
flex: 1,

  },
  QuestionMark: {
    width: '80%',
    aspectRatio: 1,
    marginLeft:0,
    height:600,
    marginLeft:0, 
  },
  DetailsBtn: {
    width:100,
    height:50,
    marginLeft:280,
    marginBottom:10,
   
  }
})
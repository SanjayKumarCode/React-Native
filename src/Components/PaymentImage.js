import { Text, View, Image ,StyleSheet} from 'react-native'
import React, { Component } from 'react'
const styles = StyleSheet.create({
    tinyLogo: {
      width: 180,
   height:45,
     
    },
  });

export default class PaymentImage extends Component {
  render() {
    return (
      <View backgroundColor="#FF8730" height={45} width={280} 
      paddingLeft={45}>
      <Image
        style={styles.tinyLogo}
        source={require('./ImagePay/pay.png')}
      />
      </View>
    )
  }
}


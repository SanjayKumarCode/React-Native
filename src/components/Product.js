import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Product = () => {
  return (
    <View style={styles.Container}>
      <View  style={styles.ProductDetail}>
      <Image
          style={styles.productdetails}
          source={{
            uri: 'https://cdn.shopify.com/app-store/listing_images/93c0c14436e7b12aaff5d3a1d309e4f6/desktop_screenshot/CJi5wpu7i_MCEAE=.png?height=900&width=1600',
          }}
        />
        </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    Container: {
        height:"100%",
        width:"100%",
        backgroundColor:"red"
    }

})
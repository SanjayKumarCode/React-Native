import React from 'react'
import {View,Text ,Box,Center,Button} from 'native-base'
import Colors from '../color'
import { FontAwesome } from '@expo/vector-icons'
const CartEmpty = () => {
  return (
   <Box flex ={1} px={4}>
   <Center h="90">
    <Center w={100} h={100} bg={Colors.white} rounded="full">
        <FontAwesome name="shopping-basket" size={64} color={Colors.main}/>
    </Center>
    <Text color={Colors.main} boldmt={5}> CART IS CartEmpty
    </Text>
   </Center>
   <Button bg={Colors.black} color={Colors.white}>START SHOPPING</Button>
   </Box>
  )
}

export default CartEmpty
import React from 'react'
import {Box, Center, ScrollView,View,Text, HStack, Button,  } from 'native-base'
import Colors from '../color'
import CartEmpty from '../Components/CartEmpty'
import CartIterms from '../Components/CartIterms'
import { useNavigation } from '@react-navigation/native'


function CartScreen() {
  const navigation = useNavigation()
  return (
   <Box flex={1} safeAreaTop bg={Colors.subGreen}>
   {/* Header py={5}*/}
   <Center w="full" py={5} >

    <Text color={Colors.black} fontSize={20} bold>Cart
    </Text>
    </Center>
   

    {/* <CartEmpty/> */}

    {/* CART ITEMS */}
     <ScrollView showsVerticalScrollIndicator={false}>
     <CartIterms/>
     {/* buttons */}
     <Center mt={5}>
     <HStack rounded={50} justifyContent="space-between" bg={Colors.white} shadow={2} w="90%"
     pl={5} h={45} alignItems="center"
     >
<Text>Total</Text>
<Button px={10} h={45} rounded={50} bg={Colors.main}
_text={{
  color:Colors.white,
  fontWeight: "semibold",
}}
_pressed={{
  bg: Colors.main,
}}
>$356</Button>
     </HStack>
     </Center>
     {/* Chekout */}
     <Center px={5}>
<Button  onPress={() => navigation.navigate("Shipping")}

bg={Colors.black} color={Colors.white} mt={10} px={140} borderRadius={30}>
  CHECKOUT
</Button>
     </Center>
    </ScrollView>
   </Box>
  );
}

export default CartScreen
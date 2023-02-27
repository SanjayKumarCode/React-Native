import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Box, Heading, ScrollView } from 'native-base';
import React from 'react'
import Colors from '../color';
import OrderInfo from '../Components/OrderInfo';
import OrderItem from '../Components/OrderItem';
import PlaceOrderModel from '../Components/PlaceOrderModel';

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <OrderInfo  
            title="CUSTOMER" 
            subTitle="Admin Doe" 
            text="admin@example.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white}/>}

            />
            <OrderInfo  
            title="SHIPPING INFO" 
            subTitle="Shipping India" 
            text="Pay Method: Paypal"
            icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white}/>}

            />
              <OrderInfo  
            title="DELIVER TO" 
            subTitle="Address" 
            text="Admin O pocket Ganga Nagar Meerut"
            icon={<Ionicons name="location-sharp" size={30} color={Colors.white}/>}

            />
        </ScrollView>
      </Box>
      {/* Order Item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
            PRODUCTS
        </Heading>
        <OrderItem />
        {/* Total */}
        <PlaceOrderModel/>
      </Box>
    </Box>
  )
}

export default PlaceOrderScreen



























































// import React from 'react'
// import {  Text, View,Box} from "native-base";


// function PlaceOrderScreen() {
//   return (
//   <View>
//     <Text> PlaceOrderScreen</Text>
//   </View>
//   )
// }

// export default  PlaceOrderScreen
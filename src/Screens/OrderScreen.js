import { Box, ScrollView, Heading, Text } from 'native-base';
import React from 'react';
import { FontAwesome5, Ionicons} from "@expo/vector-icons"
import Colors from '../color';
import OrderIterm from '../Components/OrderIterm';
import OrderModel from '../Components/OrderModel';
import OrderInfo from '../Components/OrderInfo';


export default function OrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}  >
        <Box>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                <OrderInfo
                title="SHIPPING INFO" 
                success 
                subTitle="Shipping: Tanzania" 
                            text="Pay Method: Paypal"
                            icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} /> }
                />

                <OrderInfo
                 title="DELIVER TO" 
                 subTitle="Address"  
                 danger 
                 text="Arusha Tz, Ngaramtoni Crater, P.O BOX 1234"
                 icon={<Ionicons name="location-sharp" size={30} color={Colors.white} /> }
                />
                    
            </ScrollView>
        </Box>

        {/* Order Item */}
        <Box px={6} flex={1} pb={3} >
            <Heading bold fontSize={15} isTruncated my={4} >
                PRODUCTS
            </Heading>
            <OrderIterm/>
            {/* Total */}
            <OrderModel/>  
        </Box>
    </Box>
  )
}











































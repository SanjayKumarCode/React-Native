import { Box, Button, Center, FormControl, Input, ScrollView, VStack, Text, HStack, Image, Spacer } from "native-base";
import React from 'react'
import Colors from "../color";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const paymentMethodes = [
    {
        image: require("../../assets/images/paypal.png"),
        alt: "paypal",
        icon:"Ionicons",
    },
    {
        image: require("../../assets/images/discover.png"),
        alt: "discover",
        icon:"fontAwesome",
    },
    {
        image: require("../../assets/images/googlepay.png"),
        alt: "googlepay",
        icon:"fontAwesome",
    },
];

function PaymentScreen() {
  const navigation =useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
    {/* Header */}
    <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
         PAYMENT METHOD
        </Text>
    </Center>
      {/* Selection */}
    <Box h="full" bg={Colors.subGreen} px={5}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={6} mt={5}>
        {paymentMethodes.map((i,index) =>(
            <HStack key={index} alignItems='center' bg={Colors.white} px={3} py={1} justifyContent="space-between" rounded={10}>
            <Box>
                <Image source={i.image}
                alt={i.alt} resizeMode="contain" w={60} h={50}/>
                
            </Box>
            
            {i.icon === "Ionicons" ? ( <Ionicons name="checkmark-circle" size={30} color={Colors.main} />) : (<FontAwesome name="circle-thin" size={30} color={Colors.main} /> )}
           </HStack>  
        ))}
           
            <Button 
            onPress={() => navigation.navigate("Placeorder")}
            bg={Colors.main} color={Colors.white} borderRadius={20} mt={5}>
                CONTINUE
            </Button>
            <Text italic textAlign="center">Payment method is <Text
            bold>Paypal</Text> by default</Text>
        </VStack>
    </ScrollView>
    </Box>
    </Box>
    );
}

export default PaymentScreen



























































// import React from 'react'
// import {  Text, View,Box} from "native-base";


// function PaymentScreen() {
//   return (
//   <View>
//     <Text> PaymentScreen</Text>
//   </View>
//   )
// }

// export default  PaymentScreen
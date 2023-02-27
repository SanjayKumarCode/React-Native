
import React from 'react'
import { Box,Center,FormControl,ScrollView,Text, VStack,Input, Button } from 'native-base'
import Colors from '../color'
import { useNavigation } from '@react-navigation/native'

const Shippinginput =[
  {
    label: "ENTER CITY",
    type: "text"
  },
  {
    label: "ENTER COUNTRY",
    type: "text"
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text"
  },
  {
    label: "ENTER ADDREESS",
    type: "text"
  },
]
function ShippingScreen() {
  const navigation = useNavigation()
  return (
   <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
    {/* Header  px={129}* */}
   <Center  pb={15}>
  <Text color={Colors.white} fontSize={14} bold>
  DELEVERY ADDRESS
  </Text>
  </Center> 
   {/* input */}
  
   <Box h="full" bg={Colors.white} px={5} >
     <ScrollView shawsVerticalScrollIndicator={false}>
     <VStack space={6} mt={5}>
     {Shippinginput.map((i,index) =>(
     <FormControl key={index}>
      <FormControl.Label _text={{
        fontSize:"12px",
        fontWeight:"bold"
      }}>
       {i.label}
      </FormControl.Label>
      <Input 
      boderWidth={0.2} 
      boderColor={Colors.main}
       bg={Colors.subGreen}
        // px={200}
        width={352}
        type={i.type}
        color={Colors.main}
        _focus={{
          bg:Colors.subGreen,
          boderWidth: 1,
          boderColor:Colors.main,
        }}
      />
    </FormControl>
    ))}
    <Button 
    onPress={() => navigation.navigate("Checkout")}
    bg={Colors.main} color={Colors.white} fontSize={29} fontWeight={'extrabold'}
      borderRadius={30} mt={5} >
    CONTINUE
    </Button>
    </VStack>

    </ScrollView>
  </Box>
   
   </Box>
  )
}

export default ShippingScreen





































































































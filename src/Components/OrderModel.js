import { useNavigation } from '@react-navigation/native'
import { Center, Button, Modal, VStack, HStack, Text, Image,View } from 'native-base'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import Colors from '../color'
import PaymentImage from './PaymentImage'

const OrdersInfos = [
    {
        title:"Products",
        price:125.77,
        color:"black",
    },
    {
        title:"Shipping",
        price:34.00,
        color:"black",
    },
    {
        title:"Tax",
        price:23.34,
        color:"black",
    },
    {
        title:"Total Amount",
        price:3458.00,
        color:"main",
    },
]

const OrderModel = () => {
    const navigation = useNavigation()
    const [showModel,setShowModel] = useState(false);
  return (
    <Center>
      <Button onPress={() => setShowModel(true)} bg={Colors.main} borderRadius={20} color={Colors.white} w={305} marginTop={-100} >
        SHOW PAYMENT & TOTAL
      </Button>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg"
        >
            <Modal.Content maxWidth={350}>
                <Modal.CloseButton />
                <Modal.Header>Order</Modal.Header>
                <Modal.Body>
                    <VStack space={7} >
                    {OrdersInfos.map((i,index) => (
                        <HStack key={index} alignItems="center" justifyContent="space-between">
                            <Text fontWeight="medium">{i.title}</Text>
                            <Text color={ i.color === "main" ? Colors.main : Colors.black} bold>
                                Rs {i.price}
                            </Text>
                        </HStack>
                    ))}
                        
                    </VStack>
                </Modal.Body>
                <Modal.Footer>
                <Pressable 
                w="full"
                mt={4}
                     justifyContent="center" 
                     bg={Colors.paypal}
                      h={45}
                      rounded={2} overflow="hidden" 
                       onPress={()=> setShowModel(false)}                      
                     >
                       
                           
              <PaymentImage/>          
                </Pressable>


                <Button
                    w="full" mt={4} bg={Colors.black} h={45} _text={{
                      color:Colors.white,
                    }}

                    onPress={()=>
                    {
                      navigation.navigate("Home");
                      setShowModel(false);
                    }
                   }
                    _pressed={{
                        bg:Colors.black,
                    }}
                  > PAY LATER</Button>

                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </Center>
  )
}

export default OrderModel










































































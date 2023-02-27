import { Box, Heading, Image, ScrollView, View, HStack, Spacer, Text, text } from 'native-base';
import React,{useState} from 'react';
import NumericInput from "react-native-numeric-input";
import Review from '../Components/Review';
import Rating from '../Components/Rating';
import Buttone from '../Components/Buttone';
import { useNavigation } from '@react-navigation/native';
import Colors from '../color';
// import {Text} from 'react-native';


function SingleProductScreen  ({route}) {
   const [value, setValue] = useState(0);
   const navigation = useNavigation ()
   const product = route.params
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
      <Image
       source={{ uri: product.image}}
       alt="Image"
        w="full" 
        marginTop={30}
        h={300}
         resizeMode="contain"
         />
         <Heading bold fontSize={15} mb={2} lineHeight={22}>
         {product.name}
         </Heading>
         <Rating value={product.rating} />
         {/* text ={`${product.numReviews} reviews`}  */}
         <HStack space={2} alignItems="center" my={5}>
         {
          product.countInStock > 0 ? (
            <NumericInput  
          value={value}
           totalWidth={140}
            totalHeigh={30}
         iconSize={25}
         step={1}
         maxValue={product.countInStock}
         minValue={0}
         borderColor={Colors.deepGray}
         rounded
         textColor={Colors.black}
         iconStyle={{ color: Colors.white }}
         rightButtonBackgroundColor={Colors.main}
         leftButtonBackgroundColor={Colors.main}
         /> 
         
    
          ) : (
            <Heading bold color={Colors.red} italic fontSize={12}>
         Out of Stock
         </Heading>
          )}
         <Spacer/>
         <Heading bold color={Colors.black} fontSize={19}>
         ${product.price}
         </Heading>
        
         </HStack>
         <Text lineHeight={24} fontSize={12}>
        {product.description}
         </Text>
         <Buttone  onPress={() => navigation.navigate("Cart")}
          bg={Colors.main} color={Colors.white}
           mt={10}>
          ADD TO CART
          </Buttone>
          {/* REVIEW */}
         <Review/>
      </ScrollView>
    </Box>
  );

}

export default SingleProductScreen;






























































































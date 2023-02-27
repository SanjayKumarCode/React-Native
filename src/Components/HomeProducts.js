import React from 'react'
import {  ScrollView, Text ,Flex, Pressable, Image,Box,Heading} from "native-base"; 
import products from "../data/Products";
import Colors from '../color';
import Rating from './Rating';
import { useNavigation } from '@react-navigation/native';

function HomeProducts() {
    const navigation = useNavigation()
  return (
   <ScrollView flex={1} showsVerticalScrollIndicator={false}>
   <Flex 
   flexWrap="wrap"
   direction="row"
   justifyContent="space-between"
//    px={200}
px={5}
   >
   { 
    products.map((product)  => (
    <Pressable 
    onPress={() => navigation.navigate("Single", product)}
    key={product._id}
    w="47%"
   
    bg={Colors.white}
    rounded="md"
    shadow={2}
    pt={0.3}
    my={3}
    pb={2}
    overflow="hidden"
    >
    <Image 
    source={{ uri: product.image }}
    alt={product.name}
    w="full"
    h={24}
//    marginLeft={2}
    resizeMode="contain"
    />
    <Box px={4} pt={1}>
        <Heading size= "sm" bold>
            ${product.price}
        </Heading>
        <Text fontSize={10} mt={1} isTruncated w="full">
        {product.name}
            </Text>
          {/* rating */}
          <Rating value={product.rating}/>
    </Box>
    </Pressable>
))} 
   </Flex>
   </ScrollView> 
  )
}

export default HomeProducts

































// import React from 'react'
// import {  ScrollView, Text ,Flex, Pressable, Image} from "native-base"; 
// import products from "../data/Products"
// import Colors from '../color';
// // console.warn(products)
// function HomeProducts() {
//   return (
//    <ScrollView flex={1}>
//    <Flex 
//    flexWrap="wrap"
//    direction="row"
//    justifyContent="space-between"
//    px={6}
//    >
//  { 
//    products.map((product) =>(
//     <Text>{product.name}</Text>
//    ))
// }
//    </Flex>
//    </ScrollView> 
//   )
// }

// export default HomeProducts
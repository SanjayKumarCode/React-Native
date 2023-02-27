import React from 'react'
import {  Text, View,Box} from "native-base";
import Colors from '../color';
import HomeSerch from '../Components/HomeSerch';
import HomeProducts from '../Components/HomeProducts';

function HomeScreen() {
  return (
   <Box flex={1} bg={Colors.subGreen}>
   <HomeSerch/>
   <HomeProducts/>
   </Box>
  )
}

export default HomeScreen
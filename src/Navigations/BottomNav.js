import { StyleSheet,View, Text } from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { Center,  Pressable  } from "native-base";
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../color';
import ProfileScreen from '../Screens/ProfileScreen';
import CartScreen from '../Screens/CartScreen';
import StackNav from './StackNav';

const Tab =createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
  <Pressable 
  onPress={onPress}
   h={70}
    w={70} 
    rounded= "full"
    _focus={{bg: Colors.black}}
     bg = {Colors.main}
      top={-30} 
      shadow={2}
       >
    {children}
  </Pressable>
);
const  BottomNav = () => { 
  return (
  <Tab.Navigator
 backBehavior="main"
 initialRouteName="Main"
 screenOptions={{
  tabBarShowLabel: false,
  tabBarStyle: {...styles.tab},
  headerShown: false,
  tabBarHideOnKeyboard: true,
 }}
 > 
  <Tab.Screen
  name= "Main"
  // component={HomeScreen}
  component={StackNav}
  options={{
    tabBarIcon: ({focused}) => (
<Center>
{
  focused ? (
    <Entypo name="home" size={24} color={Colors.main}/>
  ):(
    <AntDesign name="home" size={24} color={Colors.black} />
  )}
</Center>
    ),
  }}
  />
  {/* cart */}
  <Tab.Screen
  name= "Cart"
  component={CartScreen}
  options={{
    tabBarButton: (props) => <CustomTab {...props}/>,
    tabBarIcon: ({focused}) => (
<Center>
{
  focused ? (
    <FontAwesome5 name="shopping-basket" size={24} color={Colors.white}/>
  ):(
    <MaterialCommunityIcons name="shopping-outline" size={24} color={Colors.white} />
  )}
</Center>
    ),
  }}
  />

  {/* profile */}
  <Tab.Screen
  name= "Profile"
  component={ProfileScreen}
  options={{
    tabBarIcon: ({focused}) => (
<Center>
{
  focused ? (
    <FontAwesome name="user" size={24} color={Colors.main}/>
  ):(
    <AntDesign name="user" size={24} color={Colors.black} />
  )}
</Center>
    ),
  }}
  />
  </Tab.Navigator>
  );
};
 const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
    // paddingTop:5,
  },
 });

export default  BottomNav












// ====================






// import React from 'react'
// import {  Text, View,Box} from "native-base";


// function BottomNav() {
//   return (
//   <View>
//     <Text> BottomNav</Text>
//   </View>
//   )
// }

// export default  BottomNav
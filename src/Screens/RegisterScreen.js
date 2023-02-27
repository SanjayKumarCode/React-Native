import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import Colors from "../color";
export default function Register({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (

    
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../../assets/favicon.png")} />  */}
      <ImageBackground
        source={require("../../assets/bg2.jpg")}
        resizeMode="stretch"
        style={styles.img}>
<Image style={styles.image} source={require("../../assets/brandlogo.jpg")} /> 


      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setEmail(username)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(cpassword) => setPassword(cpassword)}
        /> 
      </View> 
      <Pressable mt={4}
        onPress={() => navigation.navigate("Login")}
      >
       <Text style={styles.forgot_button}>Already have an account? <Text style={{color:"blue"}} >Login</Text> </Text> 
      </Pressable>
      <TouchableOpacity style={styles.loginBtn}
      onPress={() => navigation.navigate("Bottom")}
      >
        <Text style={styles.loginText}
        >SIGN UP</Text> 
      </TouchableOpacity>     
      </ImageBackground>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    height:100,
    width:100,
    borderRadius:100,

  },
  inputView: {
    backgroundColor: "lightgreen",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    width:280,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: 140,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "lightgreen",
  },
  already:{
    marginTop:20,
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});














































































// import React from 'react'
// import {  Text, View,Box} from "native-base";


// function RegisterScreen() {
//   return (
//   <View>
//     <Text> RegisterScreen</Text>
//   </View>
//   )
// }

// export default  RegisterScreen
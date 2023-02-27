import React, { useState } from "react";
import { Box, Heading, Text,VStack,FormControl,Select,CheckIcon,TextArea } from "native-base";
import  Colors from "../color";
import Rating from "./Rating";
// import Message from '../Components/Message';
import Buttone from "./Buttone";
import Message from "./Message";

 function Review()  {
  const [ratings, setRatings] = useState('')
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* IF THERE IS NO REVIEW */}
      <Message color={Colors.main}
      bg={Colors.deepGray}
      bold
      
      children={"NO REVIEW"}
      />

      {/* REVIEW */}
      <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
            User Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          mar 23 2023
        </Text>
        <Message
        color={Colors.black}
        bg={Colors.white}
        size={10}
        children={
          "NativeBase Icons was designed to make integratin of icons in nativebase"
      }
      />
      </Box>
      {/* WRITE REVIEW */}
      <Box mt={6}>
        <Heading fontsize={15} bold mb={4}>
           REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
             _text={{
              fontSize:'12px',
              fontWeight:"bold",
              
            }}
            >
              Rating
            </FormControl.Label>
            <Select
             bg={Colors.subGreen} 
             borderWidth={0} 
             rounded={5} 
             py={3}
              placeholder="Choose Rate"
            _selectedItem={{
              bg:Colors.subGreen,
              endIcon:<CheckIcon Size={2} />,
              // justifyContent: "center",
              // alignItems: "center",
            }}

            SelectedValue={ratings}
            onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1"/>
              <Select.Item label="2 - Fair" value="2"/>
              <Select.Item label="3 - Good" value="3"/>
              
              </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
            _text={{
              fontSize:'12px',
              fontWeight:"bold",
            }}
            >
                Comment
            </FormControl.Label>
            <TextArea h={20} 
            w="full"
             placeholder="This product is good ......"
              borderWidth={0} 
              bg={Colors.subGreen}
            py={2}
            _focus={{
              bg: Colors.subGreen,
            }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
          SUBMIT
         </Buttone>
        
         <Message
        color={Colors.white}
        bg={Colors.black}
        size={10}
        children={"Please 'Login' to write a review"}
      
      />
        </VStack>
      </Box>
    </Box>
  );
}

export default Review;
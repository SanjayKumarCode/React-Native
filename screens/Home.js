
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Home}>
      <Text>Home</Text>
      </View>

     <View>
     <TouchableOpacity onPress={toggleModal}>
     <Text style={styles.popTouch}>Touch</Text>
   </TouchableOpacity>



   <Modal
        animationType="slide" 
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
        <View style={styles.CloseBtn}>
        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
        
            <Entypo name="circle-with-cross" size={24} color="black" />
          </TouchableOpacity>
         </View>

          <View style={styles.popText}>
          <Text>This is the modal content.</Text></View>
          
        </View>
      </Modal>
   </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Home :{
   marginBottom:460
    
  },
  popTouch:{
    marginLeft:270,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'black',
    color:"white",
    fontSize:15,
    borderRadius: 5,

    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 2, 
     },
  modalContainer: {
    flex: 1,
   
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop:50
   
  },
  CloseBtn:{
  marginLeft:300,
  justifyContent: 'center',
    alignItems: 'center',
  },
  popText:{
    paddingTop:200,
  justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,

  
  },
});

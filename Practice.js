import React from "react";
import { useState } from "react";
import { SafeAreaView,View,Modal,Text,TouchableOpacity,StyleSheet} from "react-native";

const Practice=()=>{
    const [modalVisible,setmodalVisible]=useState(false)
        return(
            <SafeAreaView style={{backgroundColor:'grey',flex:1}}>
                <View style={styles.container}>
                 <Modal
                   animationType="slide"
                   visible={modalVisible}
                   transparent={false}
                   >
                <View style={{flex: 1, alignItems: 'center', backgroundColor: '#00ff00', padding: 100,}}>
                <Text style={{color:'black'}}>Modal is here</Text>
                <TouchableOpacity
                onPress={()=>{setmodalVisible(!modalVisible)}}>
                 <Text>Modal Close</Text>
                </TouchableOpacity>
                </View>
                </Modal>

                <TouchableOpacity
                onPress={()=>{setmodalVisible(!modalVisible)}}>
                  <Text>Modal Open</Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
        }
const styles=StyleSheet.create({
 container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    marginTop: 30,
 }
})

export default Practice;
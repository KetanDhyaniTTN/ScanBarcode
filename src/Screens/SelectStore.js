import React, { Component } from "react";
import { SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image} from "react-native";

const SelectStore=(navigation)=>{
        return(
            <SafeAreaView style={styles.header}>
              <View style={styles.topView}>
                    <TouchableOpacity 
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.arrow}
                        source={require('../../Images/icons8-more-than-50.png')} />
                        </TouchableOpacity>
                    <Text style={styles.product}>Select Store</Text>
                    
                </View>
            </SafeAreaView>
        )
        }

const styles=StyleSheet.create({
    header:{
        backgroundColor:('rgb(45,74,89)'),
    },
    topView: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    arrow: {
        height: 30,
        width: 25,
    },
    product: {
        fontSize: 25,
        color: 'white',
        fontWeight: '600',
        marginLeft: 10
    },
})
export default SelectStore;
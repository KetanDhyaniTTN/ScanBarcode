import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal } from "react-native";
import { DATA } from "../Data";
import LinearGradient from "react-native-linear-gradient";


const SelectStore = ({ navigation}) => {
    const [showModal, setshowModal] = useState(false)
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[('rgb(49,58,85)'),('rgb(45,75,89)'), '(rgb(44,87,94)']} style={styles.linearGradient}>
        <SafeAreaView style={styles.header}>
            <View style={styles.headerView}>

            <View style={styles.topView}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.arrow}
                        source={require('../../Images/icons8-more-than-50.png')} />
                </TouchableOpacity>
                <Text style={styles.product}>Select Store</Text>
            </View>
            <Image style={styles.search}
            source={require('../../Images/icons8-search-30.png')}/>
            </View>


            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    visible={showModal}
                     transparent={true}>
                    
                    <SafeAreaView style={styles.firstView}>
                        <View style={styles.modalView}>
                        </View>
                        <View style={styles.Barcode}>
                            <View style={styles.shopDetail}>
                            <Text style={styles.shopOnline}>Coop Online Goteborg Kpl</Text>
                            <Text style={styles.shopName}>Konsumentplocklager 1 Goteborg</Text>
                            </View>
                            <Image style={styles.scan}
                            source={require('../../Images/icons8-barcode-60.png')}/>
                        <TouchableOpacity style={styles.barcodeButton}
                            onPress={() => { setshowModal(!showModal),navigation.navigate('ProductDetails')}}>
                            <Text style={styles.barcodeText}>Scan Barcode</Text>
                        </TouchableOpacity>
                        </View>
                    </SafeAreaView>

                </Modal>
            </View>
            <View style={styles.viewStores}>
            <FlatList style={styles.flatView}
                data={DATA}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.buttonStore}
                            onPress={() => { setshowModal(!showModal) }}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.titleText}>{item.detail}</Text>
                        </TouchableOpacity>
                    )
                }} />
                </View>
        </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: ('rgb(45,74,89)'),
    },
    headerView:{
        flexDirection:'row',
        justifyContent:'space-between'
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
    search:{
        height: 25,
        width: 25,
        marginRight:20,
        marginTop:15
    },
    product: {
        fontSize: 25,
        color: 'white',
        fontWeight: '600',
        marginLeft: 10
    },
    viewStores:{
        backgroundColor: 'white',
        height: '100%',
    },
    
    flatView: {
        marginTop:10
    },
    buttonStore: {
        shadowOpacity:0.2,
        shadowOffset:{width:1,height:1},
        margin: 10,
        paddingVertical:14,
        width: '90%',
        backgroundColor: 'white',
        borderRadius:3,
        alignSelf: 'center'
    },
    nameText: {
        color: 'black',
        marginLeft: 15,
        fontWeight: '700'
    },
    titleText: {
        marginLeft: 10,
        marginTop:5,
        marginLeft:15
    },
    firstView:{
       flex:1,
       justifyContent:'flex-end',
    },
    modalView:{
    backgroundColor:'black',
    height:'100%',
    opacity:0.7
   },
    Barcode:{
      backgroundColor:'white',
      paddingVertical:10
    },
    shopOnline:{
        color:'black',
        textAlign:'center',
        fontWeight:'800'
    },
    shopName:{
        color:'black',
        textAlign:'center'
    },

    scan:{
        height:80,
        width:80,
        alignSelf:'center',
        marginTop:6
    },
    barcodeButton:{
        backgroundColor:('rgb(90,127,127)'),
        paddingVertical:10,
        marginHorizontal:25,
        borderRadius:5,
        //marginTop:10,
    },
    barcodeText:{
        textAlign:'center',
        fontSize:18,
        color:'white',
        fontWeight:'700'
    }

})
export default SelectStore;
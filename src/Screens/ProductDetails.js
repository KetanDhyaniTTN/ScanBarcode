import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity, TextInput, ScrollView, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const ButtonDelete = () => {
    Alert.alert(
        "Hey!",
        "Delete The Selected Item",
        [
            {
                text: "Cancel",

            },
            { text: "OK" }
        ]
    );
}


class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtnOne: true,
            activeBtnTwo: true,
            activeBtnThree: true,
            activeBtnFour: true,
            RemoveOne: true,
            RemoveTwo: true
        };
    }
    ButtonRemoveOne = () => {
        this.setState({
            RemoveOne: !this.state.RemoveOne
        })
    }

    ButtonRemoveTwo = () => {
        this.setState({
            RemoveTwo: !this.state.RemoveTwo
        })
    }


    render() {
        return (

            <LinearGradient start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 0 }} 
            colors={[('rgb(49,58,85)'), ('rgb(45,75,89)'), '(rgb(44,87,94)']}>

                <SafeAreaView style={styles.header}>
                    <View style={styles.topView}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image style={styles.arrow}
                                source={require('../../Images/icons8-more-than-50.png')} />
                        </TouchableOpacity>
                        <Text style={styles.product}>Product Details</Text>

                    </View>
                    <ScrollView>

                        <View style={styles.container}>
                            <View style={styles.mainView}>
                                <View style={styles.firstView}>
                                    <View style={styles.Camera}>
                                        <Image style={styles.cameraIcon}
                                            source={require('../../Images/icons8-camera-50.png')} />
                                        <View style={styles.info}>
                                            <Text style={styles.randomText}>DAFHKDT016</Text>
                                            <Text style={styles.randomText}>APPLET&S</Text>
                                            <Text style={styles.randomNum}>35689873</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={ButtonDelete}>
                                        <Image style={styles.delete}
                                            source={require('../../Images/icons8-waste-32.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.secondView}>
                                    <View style={styles.quantity}>
                                        <Text style={styles.Quantity}>Quantity</Text>

                                        <View style={styles.buttons}>
                                            <View style={styles.type}>
                                                <TextInput
                                                    style={styles.input}
                                                    keyboardType={"numeric"}
                                                    maxLength={1}
                                                />
                                            </View>
                                            <View style={styles.buttonView}>
                                                <TouchableOpacity style={[styles.kgOne, this.state.activeBtnOne === true ? styles.stOne : null]}
                                                    onPress={() => {
                                                        this.setState({
                                                            activeBtnOne: !this.state.activeBtnOne
                                                        })
                                                    }}>
                                                    <Text style={[styles.weightKG, this.state.activeBtnOne === true ? styles.weightST : null]}>ST</Text>
                                                </TouchableOpacity>


                                                <TouchableOpacity style={[styles.kgOne, this.state.activeBtnOne === false ? styles.stOne : null]}
                                                    onPress={() => {
                                                        this.setState({
                                                            activeBtnOne: !this.state.activeBtnOne
                                                        })
                                                    }} >
                                                    <Text style={[styles.weightKG, this.state.activeBtnOne === false ? styles.weightST : null]}>KG</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.Price}>
                                        <Text style={styles.price}>Price(SEK)</Text>
                                        <TextInput
                                            style={styles.blackInput}
                                            keyboardType={"numeric"}
                                            maxLength={4} />
                                    </View>

                                </View>

                                <View style={styles.lastView}>
                                    <View style={styles.Remove}>
                                        <Text style={styles.Name}>Kampanjpris</Text>
                                        <TouchableOpacity
                                            onPress={this.ButtonRemoveOne}>
                                            <Text style={styles.remove}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {(this.state.RemoveOne && <View style={styles.thirdView}>
                                        <View style={styles.QuanView}>
                                            <Text style={styles.blackQuan}>Quantity</Text>

                                            <View style={styles.inputView}>
                                                <TextInput
                                                    style={styles.midInput}
                                                    keyboardType={"numeric"}
                                                    maxLength={3} />
                                            </View>
                                            <View style={styles.QuantityButtonView}>
                                                <TouchableOpacity style={[styles.kgTwo, this.state.activeBtnTwo === true ? styles.stTwo : null]}
                                                    onPress={() => {
                                                        this.setState({
                                                            activeBtnTwo: !this.state.activeBtnTwo
                                                        })
                                                    }}>

                                                    <Text style={[styles.weightKG, this.state.activeBtnTwo === true ? styles.weightST : null]}>ST</Text>
                                                </TouchableOpacity>


                                                <TouchableOpacity style={[styles.kgTwo, this.state.activeBtnTwo === false ? styles.stTwo : null]}
                                                    onPress={() => {
                                                        this.setState({
                                                            activeBtnTwo: !this.state.activeBtnTwo
                                                        })
                                                    }}>

                                                    <Text style={[styles.weightKG, this.state.activeBtnTwo === false ? styles.weightST : null]}>KG</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <View style={styles.fourthView}>
                                            <Text style={styles.blackPri}>Price(SEK)</Text>

                                            <View style={styles.inputViewTwo}>
                                                <TextInput
                                                    style={styles.midInput}
                                                    keyboardType={"numeric"}
                                                    maxLength={4} />
                                            </View>
                                        </View>

                                    </View>)}
                                </View>
                            </View>
                        </View>


                        <View style={styles.container}>
                            <View style={styles.mainView}>
                                <View style={styles.firstView}>
                                    <View style={styles.Camera}>
                                        <Image style={styles.cameraIcon}
                                            source={require('../../Images/icons8-camera-50.png')} />
                                        <View style={styles.info}>
                                            <Text style={styles.randomText}>DAFHMUFFIN</Text>
                                            <Text style={styles.randomText}>APPLET&S</Text>
                                            <Text style={styles.randomNum}>35689873</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={ButtonDelete}>
                                        <Image style={styles.delete}
                                            source={require('../../Images/icons8-waste-32.png')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.secondView}>
                                    <View style={styles.quantity}>
                                        <Text style={styles.Quantity}>Quantity</Text>

                                        <View style={styles.buttons}>
                                            <View style={styles.type}>
                                                <TextInput
                                                    style={styles.input}
                                                    maxLength={1}
                                                />
                                            </View>
                                            <View style={styles.buttonView}>
                                            <TouchableOpacity style={[styles.kgOne, this.state.activeBtnThree === true ? styles.stOne : null]}
                                                onPress={() => {
                                                    this.setState({
                                                        activeBtnThree: !this.state.activeBtnThree
                                                    })
                                                }}>
                                                <Text style={[styles.weightKG, this.state.activeBtnThree === true ? styles.weightST : null]}>ST</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.kgOne, this.state.activeBtnThree === false ? styles.stOne : null]}
                                                onPress={() => {
                                                    this.setState({
                                                        activeBtnThree: !this.state.activeBtnThree
                                                    })
                                                }} >
                                                <Text style={[styles.weightKG, this.state.activeBtnThree === false ? styles.weightST : null]}>KG</Text>
                                            </TouchableOpacity>

                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.Price}>
                                        <Text style={styles.price}>Price(SEK)</Text>
                                        <TextInput
                                            style={styles.blackInput}
                                            maxLength={4} />
                                    </View>

                                </View>

                                <View style={styles.lastView}>
                                    <View style={styles.Remove}>
                                        <Text style={styles.Name}>Kampanjpris</Text>
                                        <TouchableOpacity
                                            onPress={this.ButtonRemoveTwo}>
                                            <Text style={styles.remove}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {(this.state.RemoveTwo && <View style={styles.thirdView}>
                                        <View style={styles.QuanView}>
                                            <Text style={styles.blackQuan}>Quantity</Text>

                                            <View style={styles.inputViewThree}>
                                                <TextInput
                                                    style={styles.midInput}
                                                    maxLength={3} />
                                            </View>

                                            <View style={styles.QuantityButtonView}>
                                            <TouchableOpacity style={[styles.kgOne, this.state.activeBtnFour === true ? styles.stOne : null]}
                                                onPress={() => {
                                                    this.setState({
                                                        activeBtnFour: !this.state.activeBtnFour
                                                    })
                                                }}>
                                                <Text style={[styles.weightKG, this.state.activeBtnFour === true ? styles.weightST : null]}>ST</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.kgOne, this.state.activeBtnFour === false ? styles.stOne : null]}
                                                onPress={() => {
                                                    this.setState({
                                                        activeBtnFour: !this.state.activeBtnFour
                                                    })
                                                }}>
                                                <Text style={[styles.weightKG, this.state.activeBtnFour === false ? styles.weightST : null]}>KG</Text>
                                            </TouchableOpacity>
                                        </View>
                                        </View>
                                        <View style={styles.fourthView}>
                                            <Text style={styles.blackPri}>Price(SEK)</Text>

                                            <View style={styles.inputViewTwo}>
                                                <TextInput
                                                    style={styles.midInput}
                                                    maxLength={4} />
                                            </View>
                                        </View>

                                    </View>)}
                                </View>




                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        // backgroundColor: ('rgb(45,74,89)'),
    },
    topView: {
        flexDirection: 'row',
        paddingVertical: 12,
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
    container: {
        backgroundColor: 'white',
    },
    mainView: {
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderColor: ('rgb(45,74,89)'),
        borderWidth: 0.2,
        marginVertical: 15,
        marginHorizontal: 15,
        borderRadius: 5
    },
    firstView: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 3,
        paddingBottom: 13,
        borderColor: ('rgb(45,74,89)'),
        borderBottomWidth: 0.2,
        marginHorizontal: 8
    },
    Camera: {
        flexDirection: 'row',
    },
    cameraIcon: {
        height: 50,
        width: 50
    },
    info: {
        marginLeft: 8,
        paddingVertical: 3
    },
    randomText: {
        fontWeight: '600',
        fontSize: 11,
    },
    randomNum: {
        fontSize: 11,
        fontWeight: '200'
    },
    delete: {
        height: 22,
        width: 22,
        marginRight: 10,
        marginTop: 6
    },
    secondView: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
    quantity: {
        borderColor: 'gainsboro',
        borderRightWidth: 1,
        width: 185,
        paddingHorizontal: 18
    },
    Quantity: {
        color: 'grey',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 32
    },
    type: {
        borderColor: 'black',
        borderBottomWidth: 1,
        width: 20,
        marginLeft: 15
    },
    input: {
        marginTop: 5,
        textAlign: 'center',
        marginLeftt: 2
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    buttonView:{
        flexDirection: 'row',
         marginLeft: 6 
    },
    stOne: {
        backgroundColor: ('rgb(90,127,127)'),
        padding: 5,
        borderRadius: 2
    },
    kgOne: {
        backgroundColor: ('rgb(212,240,243)'),
        padding: 5,
        borderRadius: 2,
    },
    stTwo: {
        backgroundColor: ('rgb(90,127,127)'),
        padding: 5,
        borderRadius: 2
    },
    kgTwo: {
        backgroundColor: ('rgb(212,240,243)'),
        padding: 5,
        borderRadius: 2,
    },
    weightST: {
        color: 'white',
        fontSize: 13,
        fontWeight:'bold'
    },
    weightKG: {
        color: 'black',
        fontSize: 13,
        fontWeight:'bold'
    },
    Price: {
        flexDirection: 'column'
    },
    price: {
        color: 'grey',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 45
    },
    inputViewTwo: {
        backgroundColor: 'white',
        width: 110,
        height: 28,
        marginLeft: 20,
        borderRadius: 3
    },
    blackInput: {
        width: 85,
        borderColor: 'black',
        borderBottomWidth: 1,
        marginTop: 18,
        marginLeft: 40
    },
    lastView: {
        marginBottom: 3
    },
    Remove: {
        backgroundColor: ('rgb(239,249,251)'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 9
    },
    Name: {
        color: ('rgb(115,169,175)'),
        fontWeight: 'bold'
    },
    remove: {
        color: 'red',
        fontWeight: '500'
    },
    thirdView: {
        backgroundColor: ('rgb(195,219,222)'),
        margin: 10,
        paddingVertical: 20,
        borderRadius: 5
    },
    QuanView: {
        flexDirection: 'row'
    },
    blackQuan: {
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 5
    },
    inputView: {
        backgroundColor: 'white',
        width: 90,
        height: 28,
        marginLeft: 30,
        borderRadius: 2
    },
    QuantityButtonView:{
        flexDirection: 'row',
         marginLeft: 6
    },
    inputViewThree: {
        backgroundColor: 'white',
        width: 90,
        height: 28,
        marginLeft: 30,
        borderRadius: 2
    },
    midInput: {
        marginTop: 5,
        textAlign: 'center'
    },
    fourthView: {
        flexDirection: 'row',
        marginTop: 28
    },
    blackPri: {
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 5
    },

})

export default ProductDetails;


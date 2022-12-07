import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity, StatusBar,Alert } from "react-native";
import { connect } from "react-redux";
import { showData } from "../Redux/Actions/Action";

const ShowList=()=>{
    Alert.alert(
        "Hey!",
        "Go To The StoreList",
        [
            {
                text: "Cancel",
               
            },
            { text: "OK" }
        ]
    );
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            index: null,
        };
    }

    ButtonClick = (index) => {
        this.setState({
            click: !this.state.click,
            index: index
        })
    }
    componentDidMount() {
        this.props.showData()
    }
    render() {
        const { show } = this.props
        return (

            <SafeAreaView style={styles.header}>
                <StatusBar barStyle={'light-content'}/>
                <View style={styles.headerView}>

                    <Text style={styles.SelectConcept}>Select Concept</Text>

                    <View style={styles.rightView}>
                        <Image style={styles.search}
                            source={require('../../Images/icons8-search-30.png')} />

                        <TouchableOpacity
                        onPress={ShowList}>
                        <Image style={styles.search}
                            source={require('../../Images/icons8-menu-vertical-30.png')} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.mainView}>
                    <FlatList style={styles.flatTop}
                        data={show.data}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.flatView}>
                                    <View style={styles.Showbuttons}>
                                        <TouchableOpacity style={styles.button}
                                            onPress={() => this.ButtonClick(index)}>
                                            <Text style={styles.textTitle}>{item.title}</Text>
                                            <Image style={styles.arrowDown} source={this.state.index === index && this.state.click ? require('../../Images/less.png') : require('../../Images/more.png')} />
                                        </TouchableOpacity>

                                        {(this.state.click && this.state.index === index) &&

                                            <FlatList
                                                data={item.details[0].selectStore}
                                                renderItem={({ item }) => {
                                                    return (
                                                        <View style={styles.storeView}>
                                                            <TouchableOpacity style={styles.storeTitle}
                                                                onPress={() => this.props.navigation.navigate('SelectStore')}>
                                                                <Text style={styles.flatTitle}>{item}</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    )
                                                }} />}
                                    </View>
                                </View>
                            )
                        }} />
                </View>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        show: state.showReducer
    }
}
const mapDispatchToProps = {
    showData
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: ('rgb(45,74,89)'),
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 9,
    },
    SelectConcept: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 10
    },
    rightView: {
        flexDirection: 'row',
        paddingVertical: 5,
        width: 80,
        justifyContent: 'space-evenly'
    },
    search: {
        height: 20,
        width: 20,
    },
    mainView: {
        height: '100%',
        backgroundColor: 'white'
    },
    flatTop: {
        marginTop: 10
    },
    flatView: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 10
    },
    storeView: {
        flexDirection: 'column',
        marginTop: 5,
        marginHorizontal:6,
        width: 350,
    },

    flatTitle: {
        color: 'white'
    },
    Showbuttons: {
        backgroundColor: 'white',
        width: '90%',
        borderColor: ('rgb(236,244,245)'),
        borderWidth: 2,
        borderBottomWidth: 3,
        flexDirection: 'column',
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textTitle: {
        color: ('rgb(58,96,101)'),
        fontWeight: 'bold',
        fontSize: 15,
    },
    arrowDown: {
        height: 15,
        width: 15
    },
    storeTitle: {
        backgroundColor: 'white',
        width: '90%',
        marginVertical: 10,
        borderColor: ('rgb(236,244,245)'),
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6
    },
    flatTitle: {
        color: ('rgb(48,59,85)'),
        fontWeight: '500',
        marginLeft:15,
    },
   
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);




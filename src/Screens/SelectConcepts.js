import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image,FlatList} from "react-native";
import { connect } from "react-redux";
import { showData } from "../Redux/Actions/Action";
class Home extends Component {

    render() {
        const {show}=this.props
       // console.log(show)
        return (
            <SafeAreaView style={styles.header}>
                <View style={styles.headerView}>
                    <Text style={styles.SelectConcept}>Select Concept</Text>

                    <View style={styles.rightView}>
                        <Image style={styles.search}
                            source={require('../../Images/icons8-search-30.png')} />

                        <Image style={styles.search}
                            source={require('../../Images/icons8-menu-vertical-30.png')} />

                    </View>
                </View>
                <FlatList
                />

               
            </SafeAreaView>
        )
    }
}

const mapStateToProps=state=>{
    return(
  show=state.showReducer
    )
}

const mapDispatchToProps={
    showData
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: ('rgb(45,74,89)'),
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:9
    },
    SelectConcept: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
        marginLeft:10
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

})
export default connect(mapStateToProps,mapDispatchToProps) (Home);
import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image,FlatList, TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { showData } from "../Redux/Actions/Action";
class Home extends Component {

componentDidMount(){
    this.props.showData()
}
    render() {
        const {show}=this.props
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
                <FlatList style={styles.flatTop}
                  data={show.data}
                  renderItem={({item})=>{
                     return(
                        <View style={styles.FlatView}>
                            <TouchableOpacity style={styles.Titlebuttons}
                            >
                             <Text style={styles.textTitle}>{item.title}</Text>
                             <Image style={styles.arrowDown}
                             source={require('../../Images/icons8-more-than-48.png')}/>
                            </TouchableOpacity>
                        </View>
                     )
                  }}/>

               
            </SafeAreaView>
        )
    }
}

const mapStateToProps=state=>{
    return{
  show:state.showReducer
}
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
    flatTop:{
      
    },
   
    FlatView:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
       
    },
    Titlebuttons:{
        backgroundColor:'white',
        width:'90%',
       // height:50,
        marginVertical:10,
        borderColor:('rgb(236,244,245)'),
        borderWidth:2,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:14
    },
    textTitle:{
        color:('rgb(48,59,85)'),
        fontWeight:'bold',
        fontSize:15,
       // marginLeft:15
    },
    arrowDown:{
        height:15,
        width:15
    }

})
export default connect(mapStateToProps,mapDispatchToProps) (Home);
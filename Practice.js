import React, { Component } from "react";
import { SafeAreaView,Text,TouchableOpacity,StyleSheet} from "react-native";


class Practice extends Component{
  constructor(props) {
    super(props);
    this.state = {
        activeBtn:'Home'
    };
}


  render(){
    return(
          <SafeAreaView style={styles.mainView}>

        <TouchableOpacity style={[styles.buttonTwo,this.state.activeBtn==='Home' ? styles.buttonOne:null]}
          onPress={() => {
            this.setState({
                activeBtn: 'Home'
            })
        }}  
      >
            <Text>Ketan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonTwo,this.state.activeBtn==='Watch' ? styles.buttonOne:null]}
        onPress={() => {
          this.setState({
              activeBtn: 'Watch'
          })
      }}>
          <Text>Ketan</Text>
        </TouchableOpacity>
        </SafeAreaView>
       
     
    )
  }
}
const styles=StyleSheet.create({
     mainView:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignContent:'center'
     },
     buttonOne:{
      backgroundColor:'grey'
     },
     buttonTwo:{
      backgroundColor:'violet'
     }
})
export default Practice;
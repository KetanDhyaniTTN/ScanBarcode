import React, { Component } from "react";
import { SafeAreaView,View,Modal,Text,TouchableOpacity,StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";

class Practice extends Component{
  render(){
    return(
      
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['blue',  'red']} style={styles.linearGradient}>
          <SafeAreaView>
        <View>
        <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
        </View>
        </SafeAreaView>
        </LinearGradient>
     
    )
  }
}
const styles=StyleSheet.create({
    buttonText:{
      color:'white'
    }
})
export default Practice;
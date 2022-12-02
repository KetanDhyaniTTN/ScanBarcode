import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SelectConcepts from "./SelectConcepts";
import SelectStore from "./SelectStore";
const Stack=createNativeStackNavigator()

class NavigationScreen extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SelectConcepts" component={SelectConcepts}
                    options={{ headerShown:false}}/>
                    <Stack.Screen name="SelectStore" component={SelectStore}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default NavigationScreen;

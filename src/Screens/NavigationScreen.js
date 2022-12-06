import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SelectConcepts from "./SelectConcepts";
import SelectStore from "./SelectStore";
import ProductDetails from "./ProductDetails";
const Stack=createNativeStackNavigator()

class NavigationScreen extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SelectConcepts" component={SelectConcepts}
                    options={{ headerShown:false}}/>
                    <Stack.Screen name="SelectStore" component={SelectStore}
                    options={{ headerShown:false}}/>
                    <Stack.Screen name="ProductDetails" component={ProductDetails}
                    options={{ headerShown:false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default NavigationScreen;

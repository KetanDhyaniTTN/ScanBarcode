import React from "react";
import { Provider } from "react-redux";
import Store from './Redux/Store'
import NavigationScreen from "./Screens/NavigationScreen";
const App=()=>{
    return(
        <Provider store={Store}>
          <NavigationScreen/>
        </Provider>
    )
}
export default App;
import React from "react";
import { Provider } from "react-redux";
import Store from './Redux/Store'
import NavigationScreens from "./Screens/NavigationScreen";
const App=()=>{
    return(
        <Provider store={Store}>
          <NavigationScreens/>
        </Provider>
    )
}
export default App;
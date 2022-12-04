import { SHOW_DATA } from "../Actions/Action";

const INITIAL_STATE={
      data:[]
}

const showReducer=(state=INITIAL_STATE,action)=>{
  
  const{type,payload}=action;
  
  switch(type){
    case SHOW_DATA:
    return{
      ...state,
      data:payload
    }
    default:
        return state
  }
};
export default showReducer;

export const SHOW_DATA="SHOW_DATA"

export const showData = ()=>(dispatch)=>{
    const info=require('../../Data.json');
   
    const res= info.DATA
    dispatch({
        type:SHOW_DATA,
        payload:res
    });
};
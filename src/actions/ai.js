import * as api from '../api'



export const getPredition =(formData)=>async (dispatch)=>{
    try{
        const {data} =await api.getPredition(formData);
        console.log(data);
        dispatch({type:'FETCH' ,payload:data});
        console.log(data)
    }catch(err){console.log(err)}
}
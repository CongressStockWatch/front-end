import axios from 'axios';


const API_SERVER = process.env.REACT_APP_SERVER;


export function userReducer( state = [], action){
  switch(action.type){
    case 'Login':
      return action.payload.results
    default:
      return state;
  }
}


export const getUser = () => async (dispatch) => {
  
}





export const setUser = (data) => {
  return{
    type: "Login",
    payload: data
  }
}



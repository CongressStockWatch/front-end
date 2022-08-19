import axios from 'axios';

import { createAction, createReducer } from '@reduxjs/toolkit';

const API_SERVER = process.env.REACT_APP_SERVER;

const SP500 = 'SP500';

export const setSP500 = createAction(SP500);


export const getSP500 = () => async (dispatch, getState) => {
  let response = await axios.get(`${API_SERVER}/yahoo`);
  dispatch(setSP500(response.data));
}

const yahooReducer = createReducer({
  list: [],
},{
  [SP500]: ( state, action ) => {
    return {
      list: action.payload
    }
  }
});


// let initialState = [
//   {data: "dummy"}
// ]



// export function yahooReducer( state = initialState , action){
//   let { type, payload } = action;
//   switch(type){
//     case 'SP500':
//       return payload
//     default:
//       return state;
//   }
  
// }





export default yahooReducer;
// export const setSP500 = (data) => {
//   return{
//     type: "SP500",
//     payload: data
//   }
// }


// const yahooResponse = await axios.get(`${API_SERVER}/yahoo`);
//     const yahooData = yahooResponse.data;

// rep trade and votes are different object
//     const quiverResponse = await axios.get(`${API_SERVER}/quiver`);
//     const quiverData = quiverResponse.data;
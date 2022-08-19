import axios from 'axios';
import { createAction, createReducer } from '@reduxjs/toolkit';
const API_SERVER = process.env.REACT_APP_SERVER;

const TRADES = 'TRADES'

export const setTrades = createAction(TRADES);


export const getTrades = () => async (dispatch, getState) => {
  let response = await axios.get(`${API_SERVER}/quiver`);
  // console.log(response.data);
  dispatch(setTrades(response.data));
}

const quiverReducer = createReducer({
  list: [],
}, {
  [TRADES]: (state, action) => {
    return {
      list: action.payload
    }
  }
});


export default quiverReducer;
// export function quiverReducer( state = initialState, action){
//   switch(action.type){
//     case 'TRADES':
//       return action.payload
//     default:
//       return state;
//   }
// }

// export const setTrades = (data) => {
//   return{
//     type: "TRADES",
//     payload: data
//   }
// }


// const yahooResponse = await axios.get(`${API_SERVER}/yahoo`);
//     const yahooData = yahooResponse.data;

// rep trade and votes are different object
//     const quiverResponse = await axios.get(`${API_SERVER}/quiver`);
//     const quiverData = quiverResponse.data;
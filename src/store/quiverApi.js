import axios from 'axios';
import { createAction, createReducer } from '@reduxjs/toolkit';
const API_SERVER = process.env.REACT_APP_SERVER;

const TRADES = 'TRADES'

export const setTrades = createAction(TRADES);


export const getTrades = () => async (dispatch, getState) => {
  let response = await axios.get(`${API_SERVER}/quiver`);
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

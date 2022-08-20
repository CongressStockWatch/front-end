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

export default yahooReducer;


import axios from 'axios';

const API_SERVER = process.env.REACT_APP_SERVER;



let initialState = [
  {name: "dummy"}
]


export function quiverReducer( state = initialState, action){
  switch(action.type){
    case 'Trades':
      return action.payload
    default:
      return state;
  }
}



export const getTrades = () => async (dispatch) => {
  // add the yahoo api here
  let response = await axios.get(`${API_SERVER}/quiver`);

  dispatch(setTrades(response.data));
}


export const setTrades = (data) => {
  return{
    type: "Trades",
    payload: data
  }
}


// const yahooResponse = await axios.get(`${API_SERVER}/yahoo`);
//     const yahooData = yahooResponse.data;

// rep trade and votes are different object
//     const quiverResponse = await axios.get(`${API_SERVER}/quiver`);
//     const quiverData = quiverResponse.data;
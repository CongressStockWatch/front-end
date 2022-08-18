import axios from 'axios';

// const API_SERVER = process.env.REACT_APP_SERVER;


export function quiverReducer( state = [], action){
  switch(action.type){
    case 'Trades':
      return action.payload.results
    default:
      return state;
  }
}



export const getTrades = () => async (dispatch) => {
  // add the yahoo api here
  let response = await axios.get(`https://congresswatch.herokuapp.com/yahoo`);

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
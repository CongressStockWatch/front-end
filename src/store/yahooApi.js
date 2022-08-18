import axios from 'axios';

const API_SERVER = process.env.REACT_APP_SERVER;


let initialState = [
  {data: "dummy"}
]



export function yahooReducer( state = initialState , action){
  let { type, payload } = action;
  switch(type){
    case 'SP500':
      return payload
    default:
      return state;
  }
  
}



export const getSP500 = () => async (dispatch, getState) => {
  
  let response = await axios.get(`${API_SERVER}/yahoo`);
  dispatch(setSP500(response.data));

}


export const setSP500 = (data) => {
  return{
    type: "SP500",
    payload: data
  }
}


// const yahooResponse = await axios.get(`${API_SERVER}/yahoo`);
//     const yahooData = yahooResponse.data;

// rep trade and votes are different object
//     const quiverResponse = await axios.get(`${API_SERVER}/quiver`);
//     const quiverData = quiverResponse.data;
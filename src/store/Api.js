import axios from 'axios';


export function yahooReducer( state = [], action){
  switch(action.type){
    case 'SP500':
      return action.payload.results
    default:
      return state;
  }
}



export const getSP500 = () => async (dispatch) => {
  // add the yahoo api here
  let response = await axios.get()

  dispatch(setSP500(response.data));
}



export const setSP500 = (data) => {
  return{
    type: "SP500",
    payload: data
  }
}
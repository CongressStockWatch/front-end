
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import yahooReducer from './yahooApi.js';
import quiverReducer  from './quiverApi.js';


let reducer = combineReducers({
    yahoo: yahooReducer,
    quiver: quiverReducer
},)

export default function createStore(){
  return configureStore({
    reducer
  })
}
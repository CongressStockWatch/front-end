
// import {applyMiddleware} from 'redux';
// import {createStore} from 'redux';
// import { combineReducers } from 'redux';
// import { composeWithDevTools }  from '@redux-devtools/extension';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from './middleware/thunk';
import yahooReducer from './yahooApi.js';
import quiverReducer  from './quiverApi.js';



let reducer = combineReducers({
    // users: usersReducer,
    yahoo: yahooReducer,
    quiver: quiverReducer
},)

export default function createStore(){
  return configureStore({
    reducer
  })
}
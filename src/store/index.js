
// import {applyMiddleware} from 'redux';
// import {createStore} from 'redux';
// import { combineReducers } from 'redux';
// import { composeWithDevTools }  from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from './middleware/thunk';
import {yahooReducer} from './yahooApi';
import {quiverReducer } from './quiverApi';



let reducers = combineReducers({
    // users: usersReducer,
    yahoo: yahooReducer,
    quiver: quiverReducer
},)


export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}
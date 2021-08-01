import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
 import {platsReducer} from './reducers/platsReducer'
 import {commandPageReducer} from './reducers/commandPageReducer'





const Reducers = combineReducers({

    platsStore : platsReducer ,
   commandPageStore:commandPageReducer
   })
  
 const store =   createStore(Reducers,applyMiddleware(thunk));
    export default store
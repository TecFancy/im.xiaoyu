import {createStore, combineReducers} from 'redux';
import {reducer as classifiesReducer} from './pages/index/';

const reducer = combineReducers({
  classifies: classifiesReducer 
});

export default createStore(reducer);

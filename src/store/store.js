import {createStore, combineReducers, applyMiddleware} from 'redux'
import SearchReducer from '../reducers/SearchReducer'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const allReducers = combineReducers({
    searchBranch: SearchReducer
})
const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store
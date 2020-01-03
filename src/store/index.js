import {createStore,applyMiddleware} from 'redux';
import reducr from './reducer'
import thunk from 'redux-thunk'
const store= createStore(
    reducr,
    applyMiddleware(thunk)
    )
export default store;
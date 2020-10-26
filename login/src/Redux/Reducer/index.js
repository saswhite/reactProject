import { combineReducers } from 'redux';

/* page */
import login from '../../Feature/Login/state/reducer'

const rootReducer = combineReducers({
    login
});

export default rootReducer;
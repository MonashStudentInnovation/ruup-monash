import { combineReducers } from 'redux';
import services from './ServicesReducer';

const rootReducer = combineReducers({
    services
});

export default rootReducer;
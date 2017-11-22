import { combineReducers } from 'redux';
import services from './ServicesReducer';
import incidents from './IncidentsReducer';

const rootReducer = combineReducers({
    services,
    incidents
});

export default rootReducer;
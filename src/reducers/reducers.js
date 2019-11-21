import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import theGameOfLifeReducer from './theGameOfLifeReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    theGameOfLife: theGameOfLifeReducer
});

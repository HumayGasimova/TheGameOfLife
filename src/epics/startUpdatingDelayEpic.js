/**
* Operators
*/

import { 
    of 
} from 'rxjs';

import { 
    mergeMap 
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
* Epic
*/

export const startUpdatingDelayEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_UPDATING_DELAY),
        mergeMap(action => {
            return of(
                //    Actions.updateSpeedRange(+zoomValue),
                //    Actions.updateDelay(zoomValue),
                ) 
        })
    )
    
export default startUpdatingDelayEpic;

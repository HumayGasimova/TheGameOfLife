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

export const startZoomingEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_ZOOMING),
        mergeMap(action => {
            return of(
                   Actions.updateZoom(+action.zoom),
                   Actions.updateMapInteractionCSS(action.zoom),
                ) 
        })
    )
    
export default startZoomingEpic;

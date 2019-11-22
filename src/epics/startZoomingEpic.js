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

export const startZoomingEpic = (action$$) => 
    action$.pipe(
        ofType(actionTypes.START_ZOOMING),
        mergeMap(action => {
            let zoomValue = action.event.target.value;
            return of(
                   Actions.updateZoom(+zoomValue),
                   Actions.updateMapInteractionCSS(zoomValue),
                ) 
        })
    )
    
export default startZoomingEpic;

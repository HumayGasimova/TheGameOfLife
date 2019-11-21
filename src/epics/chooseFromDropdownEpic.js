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

export const chooseFromDropdownEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.CHOOSE_FROM_DROPDOWN),
        mergeMap(action => {

            switch(action.chosen){
                case 'Low Risk':
                    return of(
                       
                    ) 
                case 'Med Risk':
                    return of(
                     
                    ) 
                case 'High Risk':
                    return of(
                        
                    )
        
            } 
        })
    )
    
export default chooseFromDropdownEpic;

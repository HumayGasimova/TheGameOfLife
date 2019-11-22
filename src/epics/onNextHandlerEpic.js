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
* Utility
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const onNextHandlerEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.ON_NEXT_HANDLER),
        mergeMap(action => {
            let arrayOfCells = [...state$.value.theGameOfLife.cells];
            let cell;

            
                if(arrayOfCells[0].alive === true && arrayOfCells[1].alive === true ||
                    arrayOfCells[0].alive === true && arrayOfCells[213].alive === true ||
                    arrayOfCells[0].alive === true && arrayOfCells[214].alive === true
                ){
                    cell = {...arrayOfCells[0], alive: false}
                    arrayOfCells.splice(0, 1, cell);
                }
                if(arrayOfCells[0].alive === false && arrayOfCells[1].alive === true && arrayOfCells[213].alive === true && arrayOfCells[214].alive === true
                ){
                    cell = {...arrayOfCells[0], alive: true}
                    arrayOfCells.splice(0, 1, cell);
                }

                // if(arrayOfCells[212].alive === true ){
                    
                // }
                // if(arrayOfCells[15053].alive === true){
                    
                // }
                // if(arrayOfCells[15264].alive === true){
                    
                // }
            
            return of(
                   Actions.updateArrayOfCells(arrayOfCells),
                ) 
        })
    )
    
export default onNextHandlerEpic;

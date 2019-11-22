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

export const gameInitializationEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.GAME_INITIALIZATION),
        mergeMap(action => {
            let arrayOfCells = Utility.getArrayOfCells(20500);
            // let arrayOfCells = Utility.getArrayOfCells(8786);
            arrayOfCells.map((el,i)=>{
                arrayOfCells[i]={
                    id: i + 1,
                    alive: false
                }
            })
            return of(
                   Actions.updateArrayOfCells(arrayOfCells),
                ) 
        })
    )
    
export default gameInitializationEpic;

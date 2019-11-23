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
            let arrayOfBoolean = [];
            let updatedArrayOfCells = [];

            arrayOfCells.map((el,i) => {
                arrayOfBoolean.push(arrayOfCells[i].alive)
            })

            console.log(arrayOfBoolean)
                // top-left corner
                if(arrayOfCells[0].alive === true && arrayOfCells[1].alive === true && arrayOfCells[212].alive === false && arrayOfCells[213].alive === false ||
                    arrayOfCells[0].alive === true && arrayOfCells[212].alive === true && arrayOfCells[1].alive === false && arrayOfCells[213].alive === false ||
                    arrayOfCells[0].alive === true && arrayOfCells[213].alive === true && arrayOfCells[212].alive === false && arrayOfCells[1].alive === false ||
                    arrayOfCells[0].alive === true && arrayOfCells[1].alive === false && arrayOfCells[212].alive === false && arrayOfCells[213].alive === false
                ){
                    arrayOfBoolean.splice(0, 1, false);
                }
                if(arrayOfCells[0].alive === false && arrayOfCells[1].alive === true && arrayOfCells[212].alive === true && arrayOfCells[213].alive === true
                ){
                    arrayOfBoolean.splice(0, 1, true);
                }

                // top-right corner
                if(arrayOfCells[211].alive === true && arrayOfCells[210].alive === true && arrayOfCells[422].alive === false && arrayOfCells[423].alive === false ||
                    arrayOfCells[211].alive === true && arrayOfCells[422].alive === true && arrayOfCells[210].alive === false && arrayOfCells[423].alive === false ||
                    arrayOfCells[211].alive === true && arrayOfCells[423].alive === true && arrayOfCells[210].alive === false && arrayOfCells[422].alive === false ||
                    arrayOfCells[211].alive === true && arrayOfCells[210].alive === false && arrayOfCells[422].alive === false && arrayOfCells[423].alive === false
                ){
                    arrayOfBoolean.splice(211, 1, false);
                }
                if(arrayOfCells[211].alive === false && arrayOfCells[210].alive === true && arrayOfCells[422].alive === true && arrayOfCells[423].alive === true
                ){
                    arrayOarrayOfBooleanfCells.splice(211, 1, true);
                }

                // bottom-left corner
                if(arrayOfCells[15052].alive === true && arrayOfCells[14840].alive === true && arrayOfCells[14841].alive === false && arrayOfCells[15053].alive === false ||
                    arrayOfCells[15052].alive === true && arrayOfCells[14841].alive === true && arrayOfCells[14840].alive === false && arrayOfCells[15053].alive === false ||
                    arrayOfCells[15052].alive === true && arrayOfCells[15053].alive === true && arrayOfCells[14840].alive === false && arrayOfCells[14841].alive === false ||
                    arrayOfCells[15052].alive === true && arrayOfCells[14840].alive === false && arrayOfCells[14841].alive === false && arrayOfCells[15053].alive === false
                ){
                    arrayOfBoolean.splice(15052, 1, false);
                }
                if(arrayOfCells[15052].alive === false && arrayOfCells[14840].alive === true && arrayOfCells[14841].alive === true && arrayOfCells[15053].alive === true
                ){
                    arrayOfBoolean.splice(15052, 1, true);
                }

                // bottom-right corner
                if(arrayOfCells[15263].alive === true && arrayOfCells[15050].alive === true && arrayOfCells[15051].alive === false && arrayOfCells[15262].alive === false ||
                    arrayOfCells[15263].alive === true && arrayOfCells[15051].alive === true && arrayOfCells[15050].alive === false && arrayOfCells[15262].alive === false ||
                    arrayOfCells[15263].alive === true && arrayOfCells[15262].alive === true && arrayOfCells[15050].alive === false && arrayOfCells[15051].alive === false ||
                    arrayOfCells[15263].alive === true && arrayOfCells[15050].alive === false && arrayOfCells[15051].alive === false && arrayOfCells[15262].alive === false
                ){
                    arrayOfBoolean.splice(15263, 1, false);
                }
                if(arrayOfCells[15263].alive === false && arrayOfCells[15050].alive === true && arrayOfCells[15051].alive === true && arrayOfCells[15262].alive === true
                ){
                    arrayOfBoolean.splice(15263, 1, true);
                }

                // top line 
                arrayOfCells.map((el,i)=>{
                  
                    if(i > 0 && i < 212){
                        let resultTopLineCell = Utility.getUpdatedArrayOfCellsTopLine(arrayOfCells, i);
                        arrayOfBoolean.splice(i, 0, resultTopLineCell)
                    }
                    if(i > 15052 && i < 15263){
                        let resultBottomLineCell = Utility.getUpdatedArrayOfCellsBottomLine(arrayOfCells, i);
                        arrayOfBoolean.splice(i, 0, resultBottomLineCell)
                    }
                })

                arrayOfBoolean.map((el,i) => {
                    updatedArrayOfCells.push({
                        id: i + 1,
                        alive: el
                    })
                })
                console.log(arrayOfBoolean)
                console.log(updatedArrayOfCells)
            
            return of(
                    Actions.updateArrayOfCells(updatedArrayOfCells),
                ) 
        })
    )
    
export default onNextHandlerEpic;

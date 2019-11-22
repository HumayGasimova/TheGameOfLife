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
            let copyOfArray = [...arrayOfCells];
                // top-left corner
                if(arrayOfCells[0].alive === true && arrayOfCells[1].alive === true && arrayOfCells[212].alive === false && arrayOfCells[213].alive === false ||
                    arrayOfCells[0].alive === true && arrayOfCells[212].alive === true && arrayOfCells[1].alive === false && arrayOfCells[213].alive === false ||
                    arrayOfCells[0].alive === true && arrayOfCells[213].alive === true && arrayOfCells[212].alive === false && arrayOfCells[1].alive === false ||
                    arrayOfCells[0].alive === true && arrayOfCells[1].alive === false && arrayOfCells[212].alive === false && arrayOfCells[213].alive === false
                ){
                    arrayOfCells.splice(0, 1,{...arrayOfCells[0], alive: false});
                }
                if(arrayOfCells[0].alive === false && arrayOfCells[1].alive === true && arrayOfCells[212].alive === true && arrayOfCells[213].alive === true
                ){
                    arrayOfCells.splice(0, 1, {...arrayOfCells[0], alive: true});
                }

                // top-right corner
                if(arrayOfCells[211].alive === true && arrayOfCells[210].alive === true && arrayOfCells[422].alive === false && arrayOfCells[423].alive === false ||
                    arrayOfCells[211].alive === true && arrayOfCells[422].alive === true && arrayOfCells[210].alive === false && arrayOfCells[423].alive === false ||
                    arrayOfCells[211].alive === true && arrayOfCells[423].alive === true && arrayOfCells[210].alive === false && arrayOfCells[422].alive === false ||
                    arrayOfCells[211].alive === true && arrayOfCells[210].alive === false && arrayOfCells[422].alive === false && arrayOfCells[423].alive === false
                ){
                    arrayOfCells.splice(211, 1,{...arrayOfCells[211], alive: false});
                }
                if(arrayOfCells[211].alive === false && arrayOfCells[210].alive === true && arrayOfCells[422].alive === true && arrayOfCells[423].alive === true
                ){
                    arrayOfCells.splice(211, 1, {...arrayOfCells[211], alive: true});
                }

                // bottom-left corner
                if(arrayOfCells[15052].alive === true && arrayOfCells[14840].alive === true && arrayOfCells[14841].alive === false && arrayOfCells[15053].alive === false ||
                    arrayOfCells[15052].alive === true && arrayOfCells[14841].alive === true && arrayOfCells[14840].alive === false && arrayOfCells[15053].alive === false ||
                    arrayOfCells[15052].alive === true && arrayOfCells[15053].alive === true && arrayOfCells[14840].alive === false && arrayOfCells[14841].alive === false ||
                    arrayOfCells[15052].alive === true && arrayOfCells[14840].alive === false && arrayOfCells[14841].alive === false && arrayOfCells[15053].alive === false
                ){
                    arrayOfCells.splice(15052, 1,{...arrayOfCells[15052], alive: false});
                }
                if(arrayOfCells[15052].alive === false && arrayOfCells[14840].alive === true && arrayOfCells[14841].alive === true && arrayOfCells[15053].alive === true
                ){
                    arrayOfCells.splice(15052, 1, {...arrayOfCells[15052], alive: true});
                }

                // bottom-right corner
                if(arrayOfCells[15263].alive === true && arrayOfCells[15050].alive === true && arrayOfCells[15051].alive === false && arrayOfCells[15262].alive === false ||
                    arrayOfCells[15263].alive === true && arrayOfCells[15051].alive === true && arrayOfCells[15050].alive === false && arrayOfCells[15262].alive === false ||
                    arrayOfCells[15263].alive === true && arrayOfCells[15262].alive === true && arrayOfCells[15050].alive === false && arrayOfCells[15051].alive === false ||
                    arrayOfCells[15263].alive === true && arrayOfCells[15050].alive === false && arrayOfCells[15051].alive === false && arrayOfCells[15262].alive === false
                ){
                    arrayOfCells.splice(15263, 1,{...arrayOfCells[15263], alive: false});
                }
                if(arrayOfCells[15263].alive === false && arrayOfCells[15050].alive === true && arrayOfCells[15051].alive === true && arrayOfCells[15262].alive === true
                ){
                    arrayOfCells.splice(15263, 1, {...arrayOfCells[15263], alive: true});
                }

                // top line 
                arrayOfCells.map((el,i)=>{
                    
                    if(i > 0 && i < 212){
                        arrayOfCells = Utility.getUpdatedArrayOfCellsTopLine(copyOfArray, i)
                    }
                    if(i > 15052 && i < 15263){
                        arrayOfCells = Utility.getUpdatedArrayOfCellsBottomLine(copyOfArray, i)
                    }
                })
            
            return of(
                   Actions.updateArrayOfCells(arrayOfCells),
                ) 
        })
    )
    
export default onNextHandlerEpic;

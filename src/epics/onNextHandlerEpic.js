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
                        console.log(resultTopLineCell)
                        arrayOfBoolean.splice(i, 1, resultTopLineCell)
                    }
                    if(i > 15052 && i < 15263){
                        let resultBottomLineCell = Utility.getUpdatedArrayOfCellsBottomLine(arrayOfCells, i);
                        arrayOfBoolean.splice(i, 1, resultBottomLineCell)
                    }
                    if(i === 212 || i === 424 || i === 636 || i === 848 || i === 1060 || i === 1272 || i === 1484 || i === 1696 || i === 1908 || i === 2120 || 
                        i === 2332 || i === 2544 || i === 2756 || i === 2968 || i === 3180 || i === 3392 || i === 3604 || i === 3816 || i === 4028 || i === 4240 || 
                        i === 4452 || i === 4664 || i === 4876 || i === 5088 || i === 5300 || i === 5512 || i === 5724 || i === 5936 || i === 6148 || i === 6360 || 
                        i === 6572 || i === 6784 || i === 6996 || i === 7208 || i === 7420 || i === 7632 || i === 7844 || i === 8056 || i === 8268 || i === 8480 || 
                        i === 8692 || i === 8904 || i === 9116 || i === 9328 || i === 9540 || i === 9752 || i === 9964 || i === 10176 || i === 10388 || i === 10600 || 
                        i === 10812 || i === 11024 || i === 11236 || i === 11448 || i === 11660 || i === 11872 || i === 12084 || i === 12296 || i === 12508 || 
                        i === 12720 || i === 12932 || i === 13144 || i === 13356 || i === 13568 || i === 13780 || i === 13992 || i === 14204 || i === 14416 || 
                        i === 14628 || i === 14840){
                        let resultLeftLineCell = Utility.getUpdatedArrayOfCellsLeftLine(arrayOfCells, i);
                        arrayOfBoolean.splice(i, 1, resultLeftLineCell)
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

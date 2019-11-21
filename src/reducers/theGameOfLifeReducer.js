/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

import {
    updateObject
} from './utility';

/**
* Initial State
*/

export const initialState = {
    circles: [],
    numberOfBalls: 0
}

// const moveCircleXCoordinate = (state, action) => {
//     let updatedCircles = [...state.circles];
//     let circle = updatedCircles.find(x => x.id === action.id);
//     let selectedCircle = {...circle};
//     selectedCircle.x = selectedCircle.x + action.dx;
//     updatedCircles.splice(action.id, 1 ,selectedCircle);
//     return updateObject(state, {
//         circles: updatedCircles
//     });
// }


const theGameOfLife = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHOOSE_FROM_DROPDOWN:
            return state;
        // case actionTypes.GET_NUMBERS_OF_BALLS:
        //     return getNumbersOfBalls(state, action);
        default: 
            return state;
    }
}

export default theGameOfLife;

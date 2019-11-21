/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

import {
    updateObject
} from './utility';

/**
* Utility
*/

import * as Utility from '../utility';

/**
* Initial State
*/

export const initialState = {
    cells: [],
}

const updateNumberOfCells = (state, action) => {
    let updatedCells = Utility.getArrayOfCells(action.number);
    return updateObject(state, {
        cells: updatedCells
    });
}


const theGameOfLife = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHOOSE_FROM_DROPDOWN:
            return state;
        case actionTypes.UPDATE_NUMBER_OF_CELLS:
            return updateNumberOfCells(state, action);
        default: 
            return state;
    }
}

export default theGameOfLife;

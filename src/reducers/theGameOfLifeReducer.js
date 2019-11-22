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
    zoom: 1
}

const updateNumberOfCells = (state, action) => {
    let updatedCells = Utility.getArrayOfCells(action.number);
    return updateObject(state, {
        cells: updatedCells
    });
}

const updateZoom = (state, action) => {
    return updateObject(state, {
        zoom: action.val
    });
}

const theGameOfLife = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHOOSE_FROM_DROPDOWN:
            return state;
        case actionTypes.UPDATE_NUMBER_OF_CELLS:
            return updateNumberOfCells(state, action);
        case actionTypes.UPDATE_ZOOM:
            return updateZoom(state, action);
        default: 
            return state;
    }
}

export default theGameOfLife;

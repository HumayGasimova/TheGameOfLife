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
    zoom: 1,
    scale: 1,
    translation: { x: 1, y: 1 }
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

const updateMapInteractionCSS = (state, action) => {
    switch(action.zoom){
        case '1':
            return updateObject(state, {
                scale: 1,
                translation: { x: 1, y: 1 }
            });
        case '2':
            return updateObject(state, {
                scale: 0.9,
                translation: { x: 1, y: 1 }
            });
        case '3':
            return updateObject(state, {
                scale: 0.8,
                translation: { x: 1, y: 1 }
            });
        case '4':
            return updateObject(state, {
                scale: 0.7,
                translation: { x: 1, y: 1 }
            });
        case '5':
            return updateObject(state, {
                scale: 0.6,
                translation: { x: 1, y: 1 }
            });
        default:
            return state;
    }
}



const theGameOfLife = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHOOSE_FROM_DROPDOWN:
            return state;
        case actionTypes.START_ZOOMING:
            return state;
        case actionTypes.UPDATE_NUMBER_OF_CELLS:
            return updateNumberOfCells(state, action);
        case actionTypes.UPDATE_ZOOM:
            return updateZoom(state, action);
        case actionTypes.UPDATE_MAP_INTERACTION_CSS:
            return updateMapInteractionCSS(state, action);
        default: 
            return state;
    }
}

export default theGameOfLife;

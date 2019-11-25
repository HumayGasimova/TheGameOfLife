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
    translation: { x: 1, y: 1 },
    speedRange: 1,
    delay: 1000,
    dropdownList: ["Clear", "Glider", "Small Exploder", "Exploder", "10 Cell Row", "Lightweight spaceship", "Tumbler", "Gosper Glider Gun"]
}

const updateArrayOfCells = (state, action) => {
    return updateObject(state, {
        cells: action.array
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

const makeTheCellAlive = (state, action) => {
    let updatedCells = [...state.cells];
    let index = action.id - 1;
    let cell = updatedCells[index];
    cell = {...cell, alive: !cell.alive};
    
    updatedCells.splice(index, 1, cell)
    return updateObject(state, {
        cells: updatedCells
    });
}

const addOption = (state, action) => {
    let updatedDropdownList = [...state.dropdownList];
    updatedDropdownList.push(action.option)
    
    return updateObject(state, {
        dropdownList: updatedDropdownList
    });
}

const theGameOfLife = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHOOSE_FROM_DROPDOWN:
            return state;
        case actionTypes.START_ZOOMING:
            return state;
        case actionTypes.GAME_INITIALIZATION:
            return state;        
        case actionTypes.ON_NEXT_HANDLER:
            return state; 
        case actionTypes.UPDATE_ARRAY_OF_CELLS:
            return updateArrayOfCells(state, action);
        case actionTypes.UPDATE_ZOOM:
            return updateZoom(state, action);
        case actionTypes.UPDATE_MAP_INTERACTION_CSS:
            return updateMapInteractionCSS(state, action);
        case actionTypes.MAKE_THE_CELL_ALIVE:
            return makeTheCellAlive(state, action);
        case actionTypes.ADD_OPTION:
            return addOption(state, action);

        default: 
            return state;
    }
}

export default theGameOfLife;

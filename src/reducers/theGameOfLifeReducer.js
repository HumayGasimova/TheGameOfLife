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
    dropdownList: ["Clear", "Glider", "Small Exploder", "Exploder", "10 Cell Row", "Lightweight spaceship", "Tumbler", "Gosper Glider Gun"],
    playingArea: [
        { 
            name: "Clear", 
            aliveCells: []
        },
        { 
            name: "Glider", 
            aliveCells: [4728, 4941, 5153, 5152, 5151]
        },
        { 
            name: "Small Exploder", 
            aliveCells: [4728, 4939, 4940, 4941, 5151, 5364, 5153]
        },
        { 
            name: "Exploder", 
            aliveCells: [4514, 4726, 4938, 5150, 5362, 4516, 5364, 4518, 4730, 4942, 5154, 5366]
        },
        { 
            name: "10 Cell Row", 
            aliveCells: [4935, 4936, 4937, 4938, 4939, 4940, 4941, 4942, 4943, 4944]
        },
        { 
            name: "Lightweight spaceship", 
            aliveCells: [4727, 4728, 4729, 4730, 4938, 4942, 5154, 5362, 5365]
        },
        { 
            name: "Tumbler", 
            aliveCells: [4514, 4515, 4517, 4518, 4726, 4727, 4729, 4730, 4939, 4941, 5149, 5151, 5153, 5155, 5361, 5363, 5365, 5367, 5573, 5574, 5578, 5579]
        },
        { 
            name: "Gosper Glider Gun", 
            aliveCells: [
                4515, 4302, 4301, 4513, 4725, 4294, 4293, 4081, 3870, 3871, 4083, 4074, 
                4073, 3861, 3862, 3883, 3884, 3671, 3460, 3461, 3673, 3472, 3683, 3684, 
                6005, 6006, 6217, 6007, 6430, 4956, 4957, 5168, 5380, 5170
            ]
        }
    ]
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
    let updatedCells = [...state.cells];
    let updatedPlayingArea = [...state.playingArea];
    let arrayOfIdOfAliveCells = [];
    let arrayOfAliveCells = updatedCells.filter(x => x.alive === true);

    arrayOfAliveCells.map((el,i) => {
        arrayOfIdOfAliveCells.push(el.id)
    })
    updatedPlayingArea.push({
        name: action.option,
        aliveCells: arrayOfIdOfAliveCells
    })
    return updateObject(state, {
        playingArea: updatedPlayingArea
    });
}

const savePlayingArea = (state, action) => {
    let updatedDropdownList = [...state.dropdownList];
    updatedDropdownList.push(action.option)
    
    return updateObject(state, {
        dropdownList: updatedDropdownList
    });
}

const updatePlayingArea = (state, action) => {
    let updatedCells = [...state.cells];
    let updatedPlayingArea = [...state.playingArea];
    let optionsAliveCells = updatedPlayingArea.find(x => x.name === action.option).aliveCells;

    optionsAliveCells.map((el,i) => {
        let cell = updatedCells.find(x => x.id === el);
        cell.alive = true;
        updatedCells.splice(el-1, 1, cell)
    })
    
    return updateObject(state, {
        cells: updatedCells
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
        case actionTypes.SAVE_PLAYING_AREA:
            return savePlayingArea(state, action);
        case actionTypes.UPDATE_PLAYING_AREA:
            return updatePlayingArea(state, action);
        default: 
            return state;
    }
}

export default theGameOfLife;

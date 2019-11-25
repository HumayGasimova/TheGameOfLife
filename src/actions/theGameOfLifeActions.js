import * as actionTypes from '../constants/actionTypes';

export function chooseFromDropdown(chosen) {
    return { 
        type: actionTypes.CHOOSE_FROM_DROPDOWN,
        chosen: chosen
    };
};

export function updateArrayOfCells(array) {
    return { 
        type: actionTypes.UPDATE_ARRAY_OF_CELLS,
        array: array
    };
};

export function updateZoom(val) {
    return { 
        type: actionTypes.UPDATE_ZOOM,
        val: val
    };
};

export function updateMapInteractionCSS(val) {
    return { 
        type: actionTypes.UPDATE_MAP_INTERACTION_CSS,
        zoom: val
    };
};

export function startZooming(event) {
    return { 
        type: actionTypes.START_ZOOMING,
        event: event
    };
};

export function gameInitialization() {
    return { 
        type: actionTypes.GAME_INITIALIZATION
    };
};

export function makeTheCellAlive(id) {
    return { 
        type: actionTypes.MAKE_THE_CELL_ALIVE,
        id: id
    };
};

export function onNextHandler() {
    return { 
        type: actionTypes.ON_NEXT_HANDLER
    };
};

export function addOption(opt) {
    return { 
        type: actionTypes.ADD_OPTION,
        option: opt
    };
};

export function savePlayingArea(opt) {
    return { 
        type: actionTypes.SAVE_PLAYING_AREA,
        option: opt
    };
};

export function updatePlayingArea(opt) {
    return { 
        type: actionTypes.UPDATE_PLAYING_AREA,
        option: opt
    };
};

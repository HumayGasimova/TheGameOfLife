import * as actionTypes from '../constants/actionTypes';

export function chooseFromDropdown(chosen) {
    return { 
        type: actionTypes.CHOOSE_FROM_DROPDOWN,
        chosen: chosen
    };
};

export function updateNumberOfCells(number) {
    return { 
        type: actionTypes.UPDATE_NUMBER_OF_CELLS,
        number: number
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

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


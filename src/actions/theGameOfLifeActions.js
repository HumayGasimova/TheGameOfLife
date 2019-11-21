import * as actionTypes from '../constants/actionTypes';

export function chooseFromDropdown(chosen) {
    return { 
        type: actionTypes.CHOOSE_FROM_DROPDOWN,
        chosen: chosen
    };
};
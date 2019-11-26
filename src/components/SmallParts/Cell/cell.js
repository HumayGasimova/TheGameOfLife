/**
* Libraries
*/

import React from 'react';
 
import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './cell.scss';

/**
* Cell component definition and export
*/

export const Cell = (props) => {

    /**
    * Markup
    */

    return(
        <div 
            className={props.cell.alive ? "cellAlive" : "cell"}
            onClick={props.onClick}
        />
    );
}

export default Cell;
 
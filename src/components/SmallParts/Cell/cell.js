/**
* Libraries
*/

import React,{
    useState
} from 'react';
 
import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/

/**
* Styles
*/

import './cell.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Utility
*/

import * as Utility from '../../../utility';

/**
 * PlayingArea component definition and export
 */

export const Cell = (props) => {

    /**
    * Methods
    */ 

    /**
    * Markup
    */

        return(
            <div className="cell"/>
        );
    
}

export default connect(
    (state) => {
        return {
            // cells: Selectors.getCellsState(state),
        };
    },
    (dispatch) => {
        return {
            // moveCircleXCoordinate: bindActionCreators(Actions.moveCircleXCoordinate, dispatch),
        };
    }
)(Cell);
 
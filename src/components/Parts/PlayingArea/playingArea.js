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

import {
    useInterval
} from '../../Hooks/useInterval';

/**
* Components
*/

import Button from '../../library/Button/button';

/**
* Styles
*/

import './playingArea.scss';

/**
* Selectors
*/

import * as Selectors from '../../reducers/selectors';

/**
* Actions
*/

import * as Actions from '../../actions';

/**
* Utility
*/

import * as Utility from '../../utility';

/**
 * PlayingArea component definition and export
 */

export const PlayingArea = () => {



    /**
    * Methods
    */ 


    /**
    * Markup
    */

        return(
            <>
            </>
        );
    
}

export default connect(
    (state) => {
        return {
            // circles: Selectors.getCirclesState(state),
        };
    },
    (dispatch) => {
        return {
            // moveCircleXCoordinate: bindActionCreators(Actions.moveCircleXCoordinate, dispatch),
        };
    }
)(PlayingArea);
 
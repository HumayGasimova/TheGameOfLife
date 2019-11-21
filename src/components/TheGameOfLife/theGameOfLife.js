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

import Header from '../../components/Parts/Header/header';
import PlayingArea from '../../components/Parts/PlayingArea/playingArea';
import Controller from '../../components/Parts/Controller/controller';

/**
* Styles
*/

import './theGameOfLife.scss';

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
 * TheGameOfLife component definition and export
 */

export const TheGameOfLife = () => {


    /**
    * Methods
    */ 


    /**
    * Markup
    */

        return(
            <div className="theGameOfLife">
                <Header/>
                <PlayingArea/>
                <Controller/>
            </div>
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
)(TheGameOfLife);
 
/**
* Libraries
*/

import React,{
    useState,
    useEffect
} from 'react';
 
import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    MapInteractionCSS 
} from 'react-map-interaction';

/**
* Components
*/

import Backdrop from '../../../library/Backdrop/backdrop';
import Button from '../../../library/Button/button';

/**
* Styles
*/

import './infoGameRules.scss';

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
 * InfoGameRules component definition and export
 */

export const InfoGameRules = (props) => {

    // const [scale, setScale] = useState(1);
    // const [translation, setTranslation] = useState({ x: 2, y: 2 });

    /**
    * Methods
    */ 
    
    /**
    * Markup
    */

        return(
            <div className="infoGameRules">
                <div className="infoGameRules-textBox">
                    <div className="infoGameRules-wrapper">
                        <h2>John Conway’s Game of Life</h2>
                        <div className="infoGameRules-X" onClick={props.toggleBackdrop}>X</div>
                    </div>
                    <h2>The Game</h2>
                    <div>The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.</div><br/>
                    <div>This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few</div>
                    <div>mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.</div>
                    <h2>The Rules</h2>
                    <h3>For a space that is populated:</h3>
                    <div className="infoGameRules-textLine-with-padding-left">Each cell with one or no neighbors dies, as if by solitude.</div>
                    <div className="infoGameRules-textLine-with-padding-left">Each cell with four or more neighbors dies, as if by overpopulation.</div>
                    <div className="infoGameRules-textLine-with-padding-left">Each cell with two or three neighbors survives.</div>
                    <h3>For a space that is populated:</h3>
                    <div className="infoGameRules-textLine-with-padding-left">Each cell with three neighbors becomes populated.</div>
                    <h2>The Controls</h2>
                    <div>Choose a figure from the pull-down menu or make one yourself by clicking on the cells with a mouse. A new generation of cells (corresponding to one iteration of the</div>
                    <div>rules) is initiated by the 'Next' button. The 'Start' button advances the game by several generations. Game speed is regulated by the speed dial and the size of the cells</div>
                    <div>with the size dial.</div><br/>
                    <div>Edwin Martin {"<edwin@bitstorm.org> "}</div><br/>
                    <div>Recreated by Humay Gasimova</div>

                    <Button
                        className={"infoGameRules-button"}
                        onClick={props.toggleBackdrop}
                        text={"Close"}
                    />
                    <br/>
                </div> 
                <Backdrop show={true} onClick={props.toggleBackdrop}/>
            </div> 
        );
    
}

export default connect(
    (state) => {
        return {
            cells: Selectors.getCellsState(state),
            zoom: Selectors.getZoomState(state),
            scale: Selectors.getScaleState(state),
            translation: Selectors.getTranslationState(state),
        };
    },
    (dispatch) => {
        return {
            // updateNumberOfCells: bindActionCreators(Actions.updateNumberOfCells, dispatch),
        };
    }
)(InfoGameRules);
 
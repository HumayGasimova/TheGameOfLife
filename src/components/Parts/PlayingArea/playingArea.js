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

/**
* Components
*/
import Cell from '../../SmallParts/Cell/cell';
/**
* Styles
*/

import './playingArea.scss';

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

export const PlayingArea = (props) => {

    /**
    * Methods
    */ 

    const renderCells = () => {
        return(
            <div className="playingArea-cells">{props.cells.map((el,i)=>{
                return(
                    <div key={i}>
                        <Cell/>
                    </div>
                )
            })

            }</div>
        )
    }
    useEffect(()=>{
        props.updateNumberOfCells(5500);
    },[])

    /**
    * Markup
    */

        return(
            <div className="playingArea">
                {renderCells()}
            </div>
        );
    
}

export default connect(
    (state) => {
        return {
            cells: Selectors.getCellsState(state),
        };
    },
    (dispatch) => {
        return {
            updateNumberOfCells: bindActionCreators(Actions.updateNumberOfCells, dispatch),
        };
    }
)(PlayingArea);
 
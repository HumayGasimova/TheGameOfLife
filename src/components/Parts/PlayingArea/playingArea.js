/**
* Libraries
*/

import React from 'react';
 
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
 * PlayingArea component definition and export
 */

export const PlayingArea = (props) => {

    /**
    * Methods
    */ 

    const handleOnClick = (id) => {
        props.makeTheCellAlive(id);
    }

    const renderCells = () => {
        return(
            <div className="playingArea-cells">
                {props.cells.map((el,i)=>{
                    return(
                        <div key={i}>
                            <Cell 
                                onClick={() => handleOnClick(el.id)}
                                cell={el}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }

    /**
    * Markup
    */

    return(
        <MapInteractionCSS
            scale={props.scale}
            translation={props.translation}
            disableZoom={true}
            disablePan={true}
        >
            <div className="playingArea">
                {renderCells()}
            </div>
        </MapInteractionCSS>
    );
}

export default connect(
    (state) => {
        return {
            cells: Selectors.getCellsState(state),
            zoom: Selectors.getZoomState(state),
            scale: Selectors.getScaleState(state),
            translation: Selectors.getTranslationState(state)
        };
    },
    (dispatch) => {
        return {
            makeTheCellAlive: bindActionCreators(Actions.makeTheCellAlive, dispatch)
        };
    }
)(PlayingArea);
 
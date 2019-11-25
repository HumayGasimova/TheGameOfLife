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
* Hooks
*/

import { 
    useInterval 
} from '../../../Hooks/useInterval';

/**
 * PlayingArea component definition and export
 */

export const PlayingArea = (props) => {

 
    // const [translation, setTranslation] = useState({ x: 2, y: 2 });

    const handleOnClick = (id) => {
        props.makeTheCellAlive(id);
    }

    /**
    * Methods
    */ 

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
            // showControls={true}
            // onChange={({ scale, translation }, zoom) => mapInteractionCSSOnChange({ scale, translation }, props.zoom)}
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
            gameInitialization: bindActionCreators(Actions.gameInitialization, dispatch),
            makeTheCellAlive: bindActionCreators(Actions.makeTheCellAlive, dispatch),
        };
    }
)(PlayingArea);
 
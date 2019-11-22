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
 * PlayingArea component definition and export
 */

export const PlayingArea = (props) => {

 
    // const [translation, setTranslation] = useState({ x: 2, y: 2 });

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
        props.updateNumberOfCells(20500);
    },[])
    
    // const mapInteractionCSSOnChange = (obj, zoom) => {
    //     // console.log(obj, zoom)
    //     switch(zoom){
    //         case '1':
    //             console.log("1", zoom);
    //             break;
    //         case '2':
    //             console.log("2", zoom)
    //             break;
    //         case '3':
    //             console.log("3", zoom);
    //             break;
    //         case '4':
    //             console.log("4", zoom)
    //             break;
    //         case '5':
    //             console.log("5", zoom);
    //             break;
    //         case '6':
    //             console.log("6", zoom)
    //             break;
    //     }
    //     setScale(2)
    //     setTranslation({ x: 1, y: 1 })
    // }

    /**
    * Markup
    */

        return(
            <MapInteractionCSS
                scale={props.scale}
                translation={props.translation}
                disableZoom={true}
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
            translation: Selectors.getTranslationState(state),
        };
    },
    (dispatch) => {
        return {
            updateNumberOfCells: bindActionCreators(Actions.updateNumberOfCells, dispatch),
        };
    }
)(PlayingArea);
 
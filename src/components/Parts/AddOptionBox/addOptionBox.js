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
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    faTachometerAlt,
    faThLarge
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import Button from '../../../library/Button/button';
import Backdrop from '../../../library/Backdrop/backdrop';

/**
* Styles
*/

import './addOptionBox.scss';

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
 * AddOptionBox component definition and export
 */

export const AddOptionBox = (props) => {

    // const [infoIsShown, setInfoIsShown] = useState(false);

    /**
    * Methods
    */ 

   
    /**
    * Markup
    */

    return(
        <div className="addOptionBox">
           <div className="addOptionBox-wrapper">
                <div className="addOptionBox-text">Please give a name to your project</div>
                <input />
                <Button
                    className="controller-button"
                    // onClick={() => setInfoIsShown(true)}
                    text={"Add"}
                />
           </div>
            <Backdrop  
                show={true} 
                onClick={props.toogleAddOptionBox}
                className={"backdrop-infoGameRules"}
            />
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // zoom: Selectors.getZoomState(state),
        };
    },
    (dispatch) => {
        return {
            // updateZoom: bindActionCreators(Actions.updateZoom, dispatch),
        };
    }
)(AddOptionBox);
 
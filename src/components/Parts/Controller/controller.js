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
    faThLarge,

} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import Dropdown from '../../../library/Dropdown/dropdown';
import Button from '../../../library/Button/button';

/**
* Styles
*/

import './controller.scss';

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
 * Controller component definition and export
 */

export const Controller = () => {

    /**
    * Methods
    */ 


    /**
    * Markup
    */

        return(
            <div className="controller">
                <div className="controler-wrapper">
                    <Dropdown 
                        list={["1", "2", "3"]}
                        dropdownClassName={"dropdown-controller"}
                        dropdownTopClassName={"dropdown-top-controller"}
                        dropdownTopActiveClassName={"dropdown-top-active-controller"}
                        dropdownBottomClassName={"dropdown-bottom-controller"}
                        dropdownTopTextClassName={"dropdown-top-text-controller"}
                        // toggleDropdown={this.props.toggleDropdownInvestments}
                        // showDropdown={this.props.showDropdownInvestments}
                        // chosenListDropdown={this.props.chosenListDropdown[0]}
                    />
                </div>
                <Button
                    className="controller-button"
                    // onClick={this.props.startInvestmentsWithdraw}
                    text={"Next"}
                />
                <Button
                    className="controller-button"
                    // onClick={this.props.startInvestmentsWithdraw}
                    text={"Start"}
                />
                <div className="controller-moves">0</div>
                <div className="controler-wrapper">
                    <FontAwesomeIcon icon={faTachometerAlt} size="lg"/>
                    <input 
                        type="range" 
                        // value={this.props.sizeEraser} 
                        min="1" 
                        max ="11" 
                        // onChange={()=>this.onEraserSizeChange(event)}
                    />
                </div>
                <div className="controler-wrapper">
                    <FontAwesomeIcon icon={faThLarge} size="lg"/>
                    <input 
                        type="range" 
                        // value={this.props.sizeEraser} 
                        min="1" 
                        max ="10" 
                        // onChange={()=>this.onEraserSizeChange(event)}
                    />
                </div>
              
                <Button
                    className="controller-button"
                    // onClick={this.props.startInvestmentsWithdraw}
                    text={"Info"}
                />
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
)(Controller);
 
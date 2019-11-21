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

import Dropdown from '../../../library/Dropdown/dropdown'

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
 
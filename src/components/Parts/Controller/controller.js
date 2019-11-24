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

import Dropdown from '../../../library/Dropdown/dropdown';
import Button from '../../../library/Button/button';
import InfoGameRules from '../InfoGameRules/infoGameRules';
import Backdrop from '../../../library/Backdrop/backdrop';

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
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';


/**
 * Controller component definition and export
 */

export const Controller = (props) => {

    const [infoIsShown, setInfoIsShown] = useState(false);
    const [count, setCount] = useState(0);
    const [counterIsRunning, toggleCounter] = useState(false);
    const [delay, setDelay] = useState(1000);
    const [speedRange, setSpeedRange] = useState(1);
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownOption, setDropdownOption] = useState("Clear");

    /**
    * Methods
    */ 

    useInterval(() => {
        setCount(count + 1);
        props.onNextHandler();
    }, counterIsRunning ? delay : null)

    const toggleNextButton = () => {
        setCount(count + 1);
        props.onNextHandler();
    }

    const speedHandler = (e) => {
        setSpeedRange(+(e.target.value));
        switch(+(e.target.value)){
            case 1:
                setDelay(1000);
                break;
            case 2:
                setDelay(900);
                break;
            case 3:
                setDelay(800);
                break;
            case 4:
                setDelay(700);
                break;
            case 5:
                setDelay(600);
                break;
            case 6:
                setDelay(500);
                break;
            case 7:
                setDelay(400);
                break;
            case 8:
                setDelay(300);
                break;
            case 9:
                setDelay(200);
                break;
            case 10:
                setDelay(100);
                break;
            case 11:
                setDelay(50);
                break;
        }
    }

    const chooseOption = (el) => {
        setDropdownOption(el)
        switch (el){
            case "Clear":
                props.gameInitialization();
                break;
            case "Glider":
                props.gameInitialization();
                setShowDropdown(false);
                setCount(0);
                props.makeTheCellAlive(4728);
                props.makeTheCellAlive(4941);
                props.makeTheCellAlive(5153);
                props.makeTheCellAlive(5152);
                props.makeTheCellAlive(5151);
                break;
            case "Small Exploder":
                props.gameInitialization();
                setShowDropdown(false);
                setCount(0);
                props.makeTheCellAlive(4728);
                props.makeTheCellAlive(4939);
                props.makeTheCellAlive(4940);
                props.makeTheCellAlive(4941);
                props.makeTheCellAlive(5151);
                props.makeTheCellAlive(5364);
                props.makeTheCellAlive(5153);
                break;
            case "Exploder":
                props.gameInitialization();
                setShowDropdown(false);
                setCount(0);
                props.makeTheCellAlive(4514);
                props.makeTheCellAlive(4726);
                props.makeTheCellAlive(4938);
                props.makeTheCellAlive(5150);
                props.makeTheCellAlive(5362);
                props.makeTheCellAlive(4516);
                props.makeTheCellAlive(5364);
                props.makeTheCellAlive(4518);
                props.makeTheCellAlive(4730);
                props.makeTheCellAlive(4942);
                props.makeTheCellAlive(5154);
                props.makeTheCellAlive(5366);
                break;
            case "10 Cell Row":
                props.gameInitialization();
                setShowDropdown(false);
                setCount(0);
                props.makeTheCellAlive(4935);
                props.makeTheCellAlive(4936);
                props.makeTheCellAlive(4937);
                props.makeTheCellAlive(4938);
                props.makeTheCellAlive(4939);
                props.makeTheCellAlive(4940);
                props.makeTheCellAlive(4941);
                props.makeTheCellAlive(4942);
                props.makeTheCellAlive(4943);
                props.makeTheCellAlive(4944);
                break;
            case "Lightweight spaceship":
                props.gameInitialization();
                setShowDropdown(false);
                setCount(0);
                props.makeTheCellAlive(4727);
                props.makeTheCellAlive(4728);
                props.makeTheCellAlive(4729);
                props.makeTheCellAlive(4730);
                props.makeTheCellAlive(4938);
                props.makeTheCellAlive(4942);
                props.makeTheCellAlive(5154);
                props.makeTheCellAlive(5362);
                props.makeTheCellAlive(5365);
                break;
            case "Tumbler":
                props.gameInitialization();
                setShowDropdown(false);
                setCount(0);
                props.makeTheCellAlive(4514);
                props.makeTheCellAlive(4515);
                props.makeTheCellAlive(4517);
                props.makeTheCellAlive(4518);
                props.makeTheCellAlive(4726);
                props.makeTheCellAlive(4727);
                props.makeTheCellAlive(4729);
                props.makeTheCellAlive(4730);
                props.makeTheCellAlive(4939);
                props.makeTheCellAlive(4941);
                props.makeTheCellAlive(5149);
                props.makeTheCellAlive(5151);
                props.makeTheCellAlive(5153);
                props.makeTheCellAlive(5155);
                props.makeTheCellAlive(5361);
                props.makeTheCellAlive(5363);
                props.makeTheCellAlive(5365);
                props.makeTheCellAlive(5367);
                props.makeTheCellAlive(5573);
                props.makeTheCellAlive(5574);
                props.makeTheCellAlive(5578);
                props.makeTheCellAlive(5579);
                break;
            case "Gosper Glider Gun":
                props.gameInitialization();
                setShowDropdown(false);
                setCount(0);
                props.makeTheCellAlive(4515);
                props.makeTheCellAlive(4302);
                props.makeTheCellAlive(4301);
                props.makeTheCellAlive(4513);
                props.makeTheCellAlive(4725);
                props.makeTheCellAlive(4294);
                props.makeTheCellAlive(4293);
                props.makeTheCellAlive(4081);
                props.makeTheCellAlive(3870);
                props.makeTheCellAlive(3871);
                props.makeTheCellAlive(4083);
                props.makeTheCellAlive(4074);
                props.makeTheCellAlive(4073);
                props.makeTheCellAlive(3861);
                props.makeTheCellAlive(3862);
                props.makeTheCellAlive(3883);
                props.makeTheCellAlive(3884);
                props.makeTheCellAlive(3671);
                props.makeTheCellAlive(3460);
                props.makeTheCellAlive(3461);
                props.makeTheCellAlive(3673);
                props.makeTheCellAlive(3471);
                props.makeTheCellAlive(3472);
                props.makeTheCellAlive(3683);
                props.makeTheCellAlive(3684);
                props.makeTheCellAlive(6005);
                props.makeTheCellAlive(6006);
                props.makeTheCellAlive(6217);
                props.makeTheCellAlive(6007);
                props.makeTheCellAlive(6430);
                props.makeTheCellAlive(4956);
                props.makeTheCellAlive(4957);
                props.makeTheCellAlive(5168);
                props.makeTheCellAlive(5380);
                props.makeTheCellAlive(5170);
                break;
        }
    }

    /**
    * Markup
    */

    return(
        <div className="controller">
            <div className="controler-wrapper">
                <Dropdown 
                    list={["Clear", "Glider", "Small Exploder", "Exploder", "10 Cell Row", "Lightweight spaceship", "Tumbler", "Gosper Glider Gun"]}
                    dropdownClassName={"dropdown-controller"}
                    dropdownTopClassName={"dropdown-top-controller"}
                    dropdownTopActiveClassName={"dropdown-top-active-controller"}
                    dropdownBottomClassName={"dropdown-bottom-controller"}
                    dropdownTopTextClassName={"dropdown-top-text-controller"}
                    toggleDropdown={() => setShowDropdown(!showDropdown)}
                    showDropdown={showDropdown}
                    chooseOption={chooseOption}
                    chosenListDropdown={dropdownOption}
                />
            </div>
            <Backdrop 
                show={showDropdown} 
                onClick={() => setShowDropdown(false)}
                className={"backdrop-dropdown"}
            />
            <Button
                className="controller-button"
                onClick={toggleNextButton}
                text={"Next"}
            />
            <Button
                className="controller-button"
                onClick={() => {toggleCounter(!counterIsRunning)}}
                text={counterIsRunning ? "Stop" : "Start"}
            />
            <div className="controller-moves">{count}</div>
            <div className="controler-wrapper">
                <FontAwesomeIcon icon={faTachometerAlt} size="lg"/>
                <input 
                    type="range" 
                    value={speedRange} 
                    min="1" 
                    max ="11" 
                    onChange={()=>speedHandler(event)}
                />
            </div>
            <div className="controler-wrapper">
                <FontAwesomeIcon icon={faThLarge} size="lg"/>
                <input 
                    type="range" 
                    value={props.zoom} 
                    min="1" 
                    max ="5" 
                    onChange={()=>props.startZooming(event)}
                />
            </div>
            
            <Button
                className="controller-button"
                onClick={() => setInfoIsShown(true)}
                text={"Info"}
            />
            {infoIsShown ? <InfoGameRules toggleBackdrop={()=>setInfoIsShown(false)}/> : null} 
        </div>
    );
}

export default connect(
    (state) => {
        return {
            zoom: Selectors.getZoomState(state),
        };
    },
    (dispatch) => {
        return {
            updateZoom: bindActionCreators(Actions.updateZoom, dispatch),
            updateMapInteractionCSS: bindActionCreators(Actions.updateMapInteractionCSS, dispatch),
            startZooming: bindActionCreators(Actions.startZooming, dispatch),
            onNextHandler: bindActionCreators(Actions.onNextHandler, dispatch),
            gameInitialization: bindActionCreators(Actions.gameInitialization, dispatch),
            makeTheCellAlive: bindActionCreators(Actions.makeTheCellAlive, dispatch),
        };
    }
)(Controller);
 
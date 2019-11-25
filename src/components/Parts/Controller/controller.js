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
import AddOptionBox from '../AddOptionBox/addOptionBox';

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
    const [addOptionBoxIsShown, toggleAddOptionBox] = useState(false);
    

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
        props.gameInitialization();
        setDropdownOption(el);
        setCount(0);
        props.updatePlayingArea(el)
        setShowDropdown(false);
    }

    const deleteHandler = () => {
        if(confirm("Are you sure you want to delete the project?")){
            props.deleteOption(dropdownOption);
            props.gameInitialization();
            setDropdownOption("Clear")
        }
    }

    /**
    * Markup
    */

    return(
        <div className="controller">
            <div className="controler-wrapper">
                <Dropdown 
                    list={props.dropdownList}
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
            <Button
                className="controller-button"
                onClick={() => toggleAddOptionBox(true)}
                text={"Add"}
            />
             <Button
                className="controller-button"
                onClick={deleteHandler}
                text={"Delete"}
                disabled={ 
                    dropdownOption === "Clear" || 
                    dropdownOption === "Glider" ||
                    dropdownOption === "Small Exploder" || 
                    dropdownOption === "Exploder" ||
                    dropdownOption === "10 Cell Row" || 
                    dropdownOption === "Lightweight spaceship" ||
                    dropdownOption === "Tumbler" || 
                    dropdownOption === "Gosper Glider Gun"
                }
            />
            {addOptionBoxIsShown ? <AddOptionBox toogleAddOptionBox={() => toggleAddOptionBox(false)}/> : null}
            {infoIsShown ? <InfoGameRules toggleBackdrop={() => setInfoIsShown(false)}/> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            zoom: Selectors.getZoomState(state),
            dropdownList: Selectors.getDropdownListState(state),
            
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
            updatePlayingArea: bindActionCreators(Actions.updatePlayingArea, dispatch),
            deleteOption: bindActionCreators(Actions.deleteOption, dispatch), 
            
        };
    }
)(Controller);
 
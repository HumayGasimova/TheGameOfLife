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
    useInterval
} from '../../Hooks/useInterval';

/**
* Components
*/

import Button from '../../library/Button/button';

/**
* Styles
*/

import './counter.scss';

/**
* Selectors
*/

import * as Selectors from '../../reducers/selectors';

/**
* Actions
*/

import * as Actions from '../../actions';

/**
* Utility
*/

import * as Utility from '../../utility';

/**
 * Counter component definition and export
 */

export const Counter = () => {

    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [isRunning, setIsRunning] = useState(true);

    /**
    * Methods
    */ 


   useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
    }, isRunning ? delay : null);


    const handleDelayChange = (e) => {
        setDelay(Number(e.target.value));
    }

    const handleIsRunningChange = (e) => {
        setIsRunning(e.target.checked);
    }

    /**
    * Markup
    */

        return(
            <>
                <h1>{count}</h1>
                <input type="checkbox" checked={isRunning} onChange={handleIsRunningChange} style = {{width: "20px"}}/> Running
                <br />
                <input value={delay} onChange={handleDelayChange} />
            </>
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
)(Counter);
 
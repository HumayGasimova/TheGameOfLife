/**
* Libraries
*/

import React,{
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

import Header from '../../components/Parts/Header/header';
import PlayingArea from '../../components/Parts/PlayingArea/playingArea';
import Controller from '../../components/Parts/Controller/controller';

/**
* Styles
*/

import './theGameOfLife.scss';

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

import { 
    useInterval 
} from '../../Hooks/useInterval';

/**
 * TheGameOfLife component definition and export
 */

export const TheGameOfLife = (props) => {


    /**
    * Methods
    */ 

    useInterval(()=>{
            let jsonStore = JSON.stringify(props.store);
            localStorage.setItem('store',jsonStore);
    },5000)

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('store')) === null){
            props.gameInitialization();
            props.makeTheCellAlive(4728);
            props.makeTheCellAlive(4941);
            props.makeTheCellAlive(5153);
            props.makeTheCellAlive(5152);
            props.makeTheCellAlive(5151);
        }else{
            props.stateFromLocalStorage(JSON.parse(localStorage.getItem('store')));
        }
    },[])

    /**
    * Markup
    */

        return(
            <div className="theGameOfLife">
                {/* <Header/> */}
                <PlayingArea/>
                <Controller/>
            </div>
        );
    
}

export default connect(
    (state) => {
        return {
            store: state.theGameOfLife
        };
    },
    (dispatch) => {
        return {
            stateFromLocalStorage: bindActionCreators(Actions.stateFromLocalStorage, dispatch),
            gameInitialization: bindActionCreators(Actions.gameInitialization, dispatch),
            makeTheCellAlive: bindActionCreators(Actions.makeTheCellAlive, dispatch),
        };
    }
)(TheGameOfLife);
 
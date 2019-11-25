/**
* Libraries
*/

import configureStore from 'redux-mock-store';

/**
* Constants
*/

import * as Actions from '.';
import * as actionTypes from "../constants/actionTypes";

/**
* Tests
*/

const mockStore = configureStore();
const store = mockStore();

describe('theGameOfLifeReducer', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });

    it('Dispatches the correct action and payload (updateArrayOfCells)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_ARRAY_OF_CELLS,
                array: [{a: 2, b: 7}]
            }
        ];

        store.dispatch(Actions.updateArrayOfCells([{a: 2, b: 7}]));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (updateZoom)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_ZOOM,
                val: 3
            }
        ];

        store.dispatch(Actions.updateZoom(3));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (updateMapInteractionCSS)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_MAP_INTERACTION_CSS,
                zoom: 2
            }
        ];

        store.dispatch(Actions.updateMapInteractionCSS(2));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (startZooming)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_ZOOMING,
                zoom: 5
            }
        ];

        store.dispatch(Actions.startZooming(5));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (gameInitialization)', () => {
        const expectedActions = [
            {
                type: actionTypes.GAME_INITIALIZATION
            }
        ];

        store.dispatch(Actions.gameInitialization());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (makeTheCellAlive)', () => {
        const expectedActions = [
            {
                type: actionTypes.MAKE_THE_CELL_ALIVE,
                id: 34
            }
        ];

        store.dispatch(Actions.makeTheCellAlive(34));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (onNextHandler)', () => {
        const expectedActions = [
            {
                type: actionTypes.ON_NEXT_HANDLER
            }
        ];

        store.dispatch(Actions.onNextHandler(34));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (addOption)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_OPTION,
                option: "My poject"
            }
        ];

        store.dispatch(Actions.addOption("My poject"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });
    
    it('Dispatches the correct action and payload (savePlayingArea)', () => {
        const expectedActions = [
            {
                type: actionTypes.SAVE_PLAYING_AREA,
                option: "My poject"
            }
        ];

        store.dispatch(Actions.savePlayingArea("My poject"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });
   
});

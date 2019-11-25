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

   
});

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

describe('movingBallsActions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });

    it('Dispatches the correct action and payload (moveCircleXCoordinate)', () => {
        const expectedActions = [
            {
                type: actionTypes.MOVE_CIRCLE_X_COORDINATE,
                dx: 467,
                id: 3
            }
        ];

        store.dispatch(Actions.moveCircleXCoordinate(467, 3));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (moveCircleYCoordinate)', () => {
        const expectedActions = [
            {
                type: actionTypes.MOVE_CIRCLE_Y_COORDINATE,
                dy: 342,
                id: 2
            }
        ];

        store.dispatch(Actions.moveCircleYCoordinate(342, 2));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (changeDirectionOfXMove)', () => {
        const expectedActions = [
            {
                type: actionTypes.CHANGE_DIRECTION_OF_X_MOVE,
                id: 7
            }
        ];

        store.dispatch(Actions.changeDirectionOfXMove(7));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (changeDirectionOfYMove)', () => {
        const expectedActions = [
            {
                type: actionTypes.CHANGE_DIRECTION_OF_Y_MOVE,
                id: 3
            }
        ];

        store.dispatch(Actions.changeDirectionOfYMove(3));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (fillCirclesArray)', () => {
        const expectedActions = [
            {
                type: actionTypes.FILL_CIRCLES_ARRAY
            }
        ];

        store.dispatch(Actions.fillCirclesArray());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (updateCirclesArray)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_CIRCLES_ARRAY,
                arr: [{a: 6},{b: 9}]
            }
        ];

        store.dispatch(Actions.updateCirclesArray([{a: 6},{b: 9}]));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (getNumbersOfBalls)', () => {
        const expectedActions = [
            {
                type: actionTypes.GET_NUMBERS_OF_BALLS,
                num: 57
            }
        ];

        store.dispatch(Actions.getNumbersOfBalls(57));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });
});

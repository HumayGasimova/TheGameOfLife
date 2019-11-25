/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Reducer
*/

import reducer from './movingBallsReducer';

/**
* Initial State
*/

import { 
    initialState 
} from './movingBallsReducer'


describe('movingBallsReducer', () => {

    it("should return the initial state", () => {
        const action = { type: "NONE" }
        expect(reducer(undefined, action)).toEqual(initialState);
    })

    it("should update property x in circles array by adding the value passed through the action", () => {
        const action = { 
            type: actionTypes.MOVE_CIRCLE_X_COORDINATE,
            dx: 4,
            id: 0
        }
        const initState = {
            ...initialState, 
            circles: [{dx: 4, id: 0, x: 1}]
        }
        const state = {
            ...initialState, 
            circles: [{dx: 4, id: 0, x: 5}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update property y in circles array by adding the value passed through the action", () => {
        const action = { 
            type: actionTypes.MOVE_CIRCLE_Y_COORDINATE,
            dy: -4,
            id: 1
        }
        const initState = {
            ...initialState, 
            circles: [{dy: 4, id: 0, y: 2},{dy: -4, id: 1, y: 10},{dy: 5, id: 2, y: 1}]
        }
        const state = {
            ...initialState, 
            circles: [{dy: 4, id: 0, y: 2},{dy: -4, id: 1, y: 6},{dy: 5, id: 2, y: 1}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update dx property in circles array with the opposite value", () => {
        const action = { 
            type: actionTypes.CHANGE_DIRECTION_OF_X_MOVE,
            id: 0
        }
        const initState = {
            ...initialState, 
            circles: [{dx: 3, id: 0, y: 1}]
        }
        const state = {
            ...initialState, 
            circles: [{dx: -3, id: 0, y: 1}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update dy property in circles array with the opposite value", () => {
        const action = { 
            type: actionTypes.CHANGE_DIRECTION_OF_Y_MOVE,
            id: 2
        }
        const initState = {
            ...initialState, 
            circles: [{dy: 5, id: 0, y: 1},{dy: 2, id: 1, y: 1},{dy: -7, id: 2, y: 1}]
        }
        const state = {
            ...initialState, 
            circles: [{dy: 5, id: 0, y: 1},{dy: 2, id: 1, y: 1},{dy: 7, id: 2, y: 1}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update circles array with the array passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_CIRCLES_ARRAY,
            arr: [{a: 3, b: 6}]
        }
        const initState = {
            ...initialState, 
            circles: [{a: 6, b: 4}]
        }
        const state = {
            ...initialState, 
            circles: [{a: 3, b: 6}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update numberOfBalls with the value passed through the action", () => {
        const action = { 
            type: actionTypes.GET_NUMBERS_OF_BALLS,
            num: 36
        }
        const initState = {
            ...initialState, 
            numberOfBalls: 20
        }
        const state = {
            ...initialState, 
            numberOfBalls: 36
        }
        expect(reducer(initState, action)).toEqual(state);
    });
});

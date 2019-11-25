/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Reducer
*/

import reducer from './theGameOfLifeReducer';

/**
* Initial State
*/

import { 
    initialState 
} from './theGameOfLifeReducer'


describe('theGameOfLifeReducer', () => {

    it("should return the initial state", () => {
        const action = { type: "NONE" }
        expect(reducer(undefined, action)).toEqual(initialState);
    })

    it("should update cells with array passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_ARRAY_OF_CELLS,
            array: [{id: 4, b: true, c: "My project"}, {id: 7, b: false, c: "My project2"}]
        }
        const initState = {
            ...initialState, 
            cells: []
        }
        const state = {
            ...initialState, 
            cells: [{id: 4, b: true, c: "My project"}, {id: 7, b: false, c: "My project2"}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update cells with array passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_ZOOM,
            val: 3
        }
        const initState = {
            ...initialState, 
            zoom: 2
        }
        const state = {
            ...initialState, 
            zoom: 3
        }
        expect(reducer(initState, action)).toEqual(state);
    });

   
});

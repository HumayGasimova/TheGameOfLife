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

    it("should update zoom with the value passed through the action", () => {
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

    it("should set scale to 1", () => {
        const action = { 
            type: actionTypes.UPDATE_MAP_INTERACTION_CSS,
            zoom: '1'
        }
        const initState = {
            ...initialState, 
            scale: 2,
            translation: { x: 1, y: 1 }
        }
        const state = {
            ...initialState, 
            scale: 1,
            translation: { x: 1, y: 1 }
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set scale to 0.9", () => {
        const action = { 
            type: actionTypes.UPDATE_MAP_INTERACTION_CSS,
            zoom: '2'
        }
        const initState = {
            ...initialState, 
            scale: 1,
            translation: { x: 1, y: 1 }
        }
        const state = {
            ...initialState, 
            scale: 0.9,
            translation: { x: 1, y: 1 }
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set scale to 0.8", () => {
        const action = { 
            type: actionTypes.UPDATE_MAP_INTERACTION_CSS,
            zoom: '3'
        }
        const initState = {
            ...initialState, 
            scale: 2,
            translation: { x: 1, y: 1 }
        }
        const state = {
            ...initialState, 
            scale: 0.8,
            translation: { x: 1, y: 1 }
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set scale to 0.7", () => {
        const action = { 
            type: actionTypes.UPDATE_MAP_INTERACTION_CSS,
            zoom: '4'
        }
        const initState = {
            ...initialState, 
            scale: 2,
            translation: { x: 1, y: 1 }
        }
        const state = {
            ...initialState, 
            scale: 0.7,
            translation: { x: 1, y: 1 }
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set scale to 0.6", () => {
        const action = { 
            type: actionTypes.UPDATE_MAP_INTERACTION_CSS,
            zoom: '5'
        }
        const initState = {
            ...initialState, 
            scale: 2,
            translation: { x: 1, y: 1 }
        }
        const state = {
            ...initialState, 
            scale: 0.6,
            translation: { x: 1, y: 1 }
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update property alive of the object with id equal to id passed through the action in cells array with opposite boolean", () => {
        const action = { 
            type: actionTypes.MAKE_THE_CELL_ALIVE,
            id: 2
        }
        const initState = {
            ...initialState, 
            cells: [{id: 1, alive: false}, {id: 2, alive: false}]
        }
        const state = {
            ...initialState, 
            cells: [{id: 1, alive: false}, {id: 2, alive: true}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update playingArea by adding object with property - name set to the value passed through the action and property aliveCells set to array of all alive cells", () => {
        const action = { 
            type: actionTypes.ADD_OPTION,
            option: "My project"
        }
        const initState = {
            ...initialState, 
            cells: [{id: 1, alive: false}, {id: 2, alive: true}],
            playingArea: [{name: "example", aliveCells: [1, 2, 3]}]

        }
        const state = {
            ...initialState, 
            cells: [{id: 1, alive: false}, {id: 2, alive: true}],
            playingArea: [{name: "example", aliveCells: [1, 2, 3]}, {name: "My project", aliveCells: [2]}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });
    
    it("should update dropdownList by adding the value passed through the action", () => {
        const action = { 
            type: actionTypes.SAVE_PLAYING_AREA,
            option: "My project"
        }
        const initState = {
            ...initialState, 
            dropdownList: ["example1", "example2"]

        }
        const state = {
            ...initialState, 
            dropdownList: ["example1", "example2", "My project"]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update alive propertiy of objects with property id given in property aliveCells in the object which property name is equal to the option passed through the action in the playingArea array", () => {
        const action = { 
            type: actionTypes.UPDATE_PLAYING_AREA,
            option: "My project"
        }
        const initState = {
            ...initialState,
            playingArea: [{name: "example", aliveCells: [1, 2, 3]}, {name: "My project", aliveCells: [2,3]}], 
            cells: [{id: 1, alive: false}, {id: 2, alive: false}, {id: 3, alive: false}]
        }
        const state = {
            ...initialState, 
            playingArea: [{name: "example", aliveCells: [1, 2, 3]}, {name: "My project", aliveCells: [2,3]}],
            cells: [{id: 1, alive: false}, {id: 2, alive: true}, {id: 3, alive: true}]
       
        }
        expect(reducer(initState, action)).toEqual(state);
    });
});

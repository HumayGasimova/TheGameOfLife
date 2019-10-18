
import * as actionTypes from "../constants/actionTypes";

import reducer from './businessReducer';
import { initialState } from './businessReducer'


describe('businessReducer', () => {

    it("should return the initial state", () => {
        const action = { type: "NONE" }
        expect(reducer(undefined, action)).toEqual(initialState);
    })

    it("should add 1 paperclips, add 1 to unsoldInventory and subtract 1 from wire", () => {
        const action = { type: actionTypes.MAKE_PAPERCLIP }
        const state = {
            ...initialState, 
            paperClips: 1, 
            unsoldInventory: 1, 
            wire: 49
        }
        expect(reducer(initialState, action)).toEqual(state);
    })

    it("should update clipsPerSec with the value passed through actions", () => {
        const action = { 
            type: actionTypes.UPDATE_CLIPS_PER_SEC,
            val: 3
        }
        const state = {
            ...initialState, 
            clipsPerSec: 3
        }
        expect(reducer(initialState, action)).toEqual(state);
    })

    it("should update funds with the value passed through actions", () => {
        const action = { 
            type: actionTypes.UPDATE_FUNDS,
            value: 0.5
        }
        const state = {
            ...initialState, 
            funds: 0.5
        }
        expect(reducer(initialState, action)).toEqual(state);
    })

    it("should subtract one from unsoldInventory", () => {
        const action = { 
            type: actionTypes.UPDATE_UNSOLD_INVENTORY
        }
        const initState = {
            ...initialState, 
            unsoldInventory: 7
        }
        const state = {
            ...initialState, 
            unsoldInventory: 6
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should subtract 0.01 from paperclipPrice", () => {
        const action = { 
            type: actionTypes.LOWER_PRICE
        }
        const initState = {
            ...initialState, 
            paperclipPrice: 7.01
        }
        const state = {
            ...initialState, 
            paperclipPrice: 7
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should add 0.01 to paperclipPrice", () => {
        const action = { 
            type: actionTypes.RAISE_PRICE
        }
        const initState = {
            ...initialState, 
            paperclipPrice: 7.01
        }
        const state = {
            ...initialState, 
            paperclipPrice: 7.02
        }
        expect(reducer(initState, action)).toEqual(state);
    })
    
    

    // it("should return the initial state", () => {
    //    expect(reducer(undefined, {})).toEqual(state);
    // })

    // it('should return the initial state', () => {
    //     expect(reducer(undefined, {})).toMatchSnapshot()
    //   })

    // it('should handle MAKE_PAPERCLIP', () => {
    //     expect(reducer(initialState,{type: 'MAKE_PAPERCLIP'})).toMatchSnapshot()
    // })

    // it("should add 1 paperclips, add 1 to unsoldInventory and subtract 1 from wire", () => {
    //     expect(reducer(initialState, {type: actionTypes.MAKE_PAPERCLIP})).toEqual(
    //         {
    //            ...initialState,
    //            paperClips: 1,
    //            unsoldInventory: 1,
    //            wire: 49
    //         }
    //        );
    //  })


});

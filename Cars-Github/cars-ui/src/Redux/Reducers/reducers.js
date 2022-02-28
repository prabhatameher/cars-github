import { ActionTypes } from '../Constants/actions-types'

const initialState = {
    favouriteCars: []
}


// console.log('State', initialState.favouriteCars)
export const carsReducer = (state = initialState, { type, payload }) => {
    // console.log("Fired Action and Data", type, payload)
    switch (type) {
        case ActionTypes.ADD_TO_FAV:
            return { ...state, favouriteCars: [...state.favouriteCars, payload] }
        case ActionTypes.REMOVE_SELECTED_FAV:
            return { ...state, favouriteCars: state.favouriteCars.filter(i => i._id !== payload) }
        default:
            return state;
    }
};

export const selectedCarReducer = (state = {}, { type, payload }) => {
    // console.log('Removed Fired', type, payload)
    switch (type) {
        case ActionTypes.SELECTED_FAV:
            return { ...state, ...payload }
        // case ActionTypes.REMOVE_SELECTED_FAV:
        //     return {}
        default:
            return state;
    }
};
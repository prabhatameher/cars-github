import { ActionTypes } from "../Constants/actions-types"

export const addCars = (car) => {

    return {
        type: ActionTypes.ADD_TO_FAV,
        payload: car
    };
};

export const selectedCar = (car) => {

    return {
        type: ActionTypes.SELECTED_FAV,
        payload: car
    };
};

export const removeSelectedCar = ({_id}) => {

    return {
        type: ActionTypes.REMOVE_SELECTED_FAV,
        payload:_id

    };
};

import { combineReducers } from "redux";
import { carsReducer,selectedCarReducer } from "./reducers";

const reducers=combineReducers({
    allFavourites:carsReducer,
    selectedFavourite:selectedCarReducer
})

export default reducers
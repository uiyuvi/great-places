import { ADD_PLACE } from "../actions/placesAction";
import Place from "../../models/place";

const initialState = {
    places : []
}
export const placesReducer = (state = initialState, action) => {
    if(action.type === ADD_PLACE){
        let updatedPlace;
        const newPlace = new Place(new Date().toString(), action.placeData.title )
        updatedPlace = {
            ...state,
            places: state.places.concat(newPlace)
        }
        return updatedPlace;
    }
    return state;
}


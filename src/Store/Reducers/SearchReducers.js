
import * as actionTypes from "../Actions/actionTypes";

const initialState = {
    loading: false,
    gender: "",
    species:"",
    name: "",
    order: 1
}
const FiletrsReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.FILTERED_RESULT_SUCCESS:


            return {
                ...state,
                loading: false,
                gender: action.payload.gender||"",
                species: action.payload.species||"",
                name: action.payload.searchText||"",
                order: 1
            }


        default: return state

    }

}

export default FiletrsReducer
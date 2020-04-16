
import * as actionTypes from "../Actions/actionTypes";

const initialState = {
    loading:false,
    data:null
}
const charactersReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.GET_CHARACTERS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_CHARACTERS_SUCCESS:

            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_CHARACTERS_FAILED:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default: return state

    }

}

export default charactersReducer
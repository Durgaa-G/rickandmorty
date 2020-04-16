import {

    FILTERED_RESULT_START,
    FILTERED_RESULT_SUCCESS,
    FILTERED_RESULT_FAIL

} from "./actionTypes";

import {getChars} from "./index"



import { elements } from "../../Const";
import axios from "axios";


export const updateFilter = (data) => {
    return {
        type: FILTERED_RESULT_SUCCESS,
        payload: data

    }
}

export const updateFilters = (data)=>{
    return (dispatch) => {

      dispatch(updateFilter(data));
      let query = Object.keys(data).map(key => key + '=' + data[key]).join('&');

      dispatch(getChars(query))



    }

}
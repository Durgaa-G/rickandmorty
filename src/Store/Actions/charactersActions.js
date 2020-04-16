import {
    GET_CHARACTERS_START,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAILED
} from "./actionTypes"

import { elements } from "../../Const";
import axios from "axios";



export const charReqStarts = (data) => {
    return {
        type: GET_CHARACTERS_START,
        payload: data

    }
}

export const charReqSucess = (data) => {
    return {
        type: GET_CHARACTERS_SUCCESS,
        payload: data

    }
}

export const charReqFailed = (data) => {
    return {
        type: GET_CHARACTERS_FAILED,
        payload: data

    }
}
export const getChars = (data) => {

    return (dispatch) => {
        dispatch(charReqStarts())

        axios.get(`https://rickandmortyapi.com/api/character/?${data}` ).then(
            response => {
                let data = JSON.parse(JSON.stringify(response.data))

                dispatch(charReqSucess(data));
            }
        )
            .catch(err => {
                dispatch(charReqFailed(err));
            })


    }
}
import * as types from "./types";

export function addFilter({filter}){
    return {
        type: types.ADD_FILTER,
        payload: {
            filter
        }
    }
}

export function removeFilter({filterId}){
    return {
        type: types.REMOVE_FILTER,
        payload: {
            filterId
        }
    }
}
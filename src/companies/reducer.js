import * as types from "./types";

const initialState = {
    list: [],
    isFetching: false,
    isFetchingWithFilter: false
}

export default function Collection(state = initialState, action) {

    switch (action.type) {
        case types.FETCHING_COMPANIES: {
            return {
                ...state,
                isFetching: true
            }
        }

        case types.FETCHING_COMPANIES_FAILED: {
            const {error} = action.payload;
          
            return {
                ...state,
                error,
                isFetching: false
            }
        }

        case types.FETCHING_COMPANIES_SUCCESS: {
            const {companies} = action.payload;
          
            return {
                ...state,
                list: companies,
                isFetching: false
            }
        }
        
        default:
            return state
    }
}

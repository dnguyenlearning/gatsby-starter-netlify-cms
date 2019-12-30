import * as types from "./types";

const initialState = {
    filters: [
        { id: 1, field: 'San Pham', value: `{type}='Product'`, icon: '👨‍💻' },
        { id: 2, field: 'Out Source', value: `{type}='Outsourcing'`, icon: '🤖' },
        { id: 3, field: 'Viet Nam', value:`{country}='Viet Nam'`, icon: '🇻🇳' },
        { id: 4, field: 'USA', value:`{country}='United States'`, icon: '🇺🇸' },
        { id: 5, field: 'Singapore', value:`{country}='Singapore'`, icon: '🇸🇬' },
        { id: 6, field: 'Hong Kong', value:`{country}='Hong Kong'`, icon: '🇭🇰' },
        { id: 7, field: 'Japan', value:`{country}='Japan'`, icon: '🇯🇵' },
        { id: 8, field: 'France', value:`{country}='France'`, icon: '🇫🇷' },
        { id: 9, field: 'Sweden', value:`{country}='Sweden'`, icon: '🇸🇪' },
        { id: 10, field: 'No OT', value:`{overtime}='No OT'`, icon: '🥴' },
        // { id: 10, field: 'Ho Chi Minh', value:`SEARCH("Ho Chi Minh")`, icon: '🏙' },
        // { id: 10, field: 'Ha Noi', value:`SEARCH("Ha Noi")'`, icon: '🏙' },
        // { id: 10, field: 'Da Nang', value:`{overtime}='No OT'`, icon: '🏙' },
    ],
    userFilters: []
}

export default function Collection(state = initialState, action) {

    switch (action.type) {
        case types.ADD_FILTER: {
            const {filter} = action.payload;
            return {
                ...state,
                userFilters: [filter, ...state.userFilters]
            }
        }
        case types.REMOVE_FILTER: {
            const {filterId} = action.payload;
            const {userFilters} = state;
            const newUserFilter = userFilters.filter(filter => filter.id !== filterId);
            return {
                ...state,
                userFilters: newUserFilter
            }
        }
        default:
            return state
    }
}

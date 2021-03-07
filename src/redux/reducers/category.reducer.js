import {categoryConstants} from "../constants/constants";

const initialState = {
    categories: [],
    loading: false,
    error: null
}

export default (state=initialState, action) => {
    switch(action.type){
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            break;
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...initialState,
                categories: action.payload.categories
            }
    }
    return state;
}

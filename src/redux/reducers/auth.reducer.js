import {authConstants} from "../constants/constants";

const initialState = {
    token: '',
    user: {
        email: '',
        firstName: '',
        lastName: '',
        fullName: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''

}

export default (state = initialState, action) => {

    console.log(state, action)
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {...state, authenticating: true, loading: true}
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
                loading: false
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initialState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;


    }
    return state
}

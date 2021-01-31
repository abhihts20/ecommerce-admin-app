import {authRoutes} from '../constants/constants'

export const login = (user) => {
    return (dispatch) => {
        dispatch({
            type: authRoutes.LOGIN_REQUEST,
            payload: {
                ...user
            }
        })
    }
}

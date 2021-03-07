import axiosInstance from "../../helpers/axios";
import {categoryConstants} from "../constants/constants";

export const getAllCategories = () => {
    return async dispatch => {
        dispatch({
            type:categoryConstants.GET_ALL_CATEGORIES_REQUEST
        })
        const response = await axiosInstance('category/getAllCategories');

        if (response.status === 200) {
            const {category} = response.data;
            console.log("Category in Action",category);
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: {categories:category}
            })
        }else{
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: {err:response.data.error}
            })
        }
    }
}

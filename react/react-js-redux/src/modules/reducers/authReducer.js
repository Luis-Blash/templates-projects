import { types } from "../types/types";

const initialState = {
    authentication: false,
    email: '',
    user: '',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state
            }
        case types.logout:
            return {
                ...state
            }
        default:
            return state
    }
}
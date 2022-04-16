import { types } from "../types/types";

// request axios
export const authAxios = (type, dataform) => {
    return async (dispatch, getState) => {
        const state = getState();
        const { email, password } = dataform;
        try {
            console.log(state, email, password);
            dispatch(login('luis'));
        } catch (error) {
            console.log(error.response.data);
        }
    };
};


// actions
export const login = (user) => {
    return {
        type: types.login,
        payload: {
            user: user,
        },
    };
};


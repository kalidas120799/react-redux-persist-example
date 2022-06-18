import produce from "immer";
import { LOGIN, LOGOUT } from "../actions-types";

const initialState = {
    loginDetails: null,
    isLogin: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return produce(state, (nextState) => {
                nextState.isLogin = true;
                nextState.loginDetails = action.payload;
            });

        case LOGOUT:
            return produce(state, (nextState) => {
                nextState.isLogin = false;
                nextState.loginDetails = null;
            });

        default:
            return state;
    }
};
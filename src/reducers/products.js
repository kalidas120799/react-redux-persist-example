import produce from "immer";
import { GET_ALL_PRODUCTS } from "../actions-types";

const initialState = {
    data: [],
    isRequesting: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return produce(state, (nextState) => {
                nextState.isRequesting = false;
                nextState.data = action.payload;
            });
        default:
            return state;
    }
};



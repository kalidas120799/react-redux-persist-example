import { LOGIN, LOGOUT } from "../actions-types";
import { persistor } from "../store";
export const login = (data) => ({ type: LOGIN, payload: data });

export const logout = () => ({ type: LOGOUT });


export const userLogout = () => async dispatch => {
    await persistor.flush();
    await persistor.purge();
    dispatch(logout());
};
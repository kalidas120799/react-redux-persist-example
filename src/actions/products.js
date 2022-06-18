import axios from "axios";
axios.defaults.baseURL = 'https://fakestoreapi.com';
import { GET_ALL_PRODUCTS } from "../actions-types";

export const allProducts = data => ({ type: GET_ALL_PRODUCTS, payload: data });

export const getAllProducts = () => async dispatch => {
    const res = await axios.get("/products");
    dispatch(allProducts(res.data || []));
};
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Shopcard } from "../components";
import { getAllProducts } from "../actions";
import { Button, Grid } from '@mui/material';

const Home = () => {
    const { isRequesting, data } = useSelector((state) => state.products);

    const allProductsDispatch = useDispatch();

    useEffect(() => {
        allProductsDispatch(getAllProducts());
    }, []);

    return (
        <div>
            <Grid container >
                {
                    !isRequesting && data.length !== 0 ? data.map((item, index) => (
                        <Grid item={true} md={3} sx={{ mt: 5 }} key={index}> <Shopcard {...item} /> </Grid>
                    )) : <div>Loading...</div>
                }

            </Grid>

        </div>
    );
};

export default Home;
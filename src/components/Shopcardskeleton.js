import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function Shopcardskeleton() {
    return (
        <>
            <Skeleton width={400} height={350} />
            <Skeleton count={5} />
        </>
    );
}

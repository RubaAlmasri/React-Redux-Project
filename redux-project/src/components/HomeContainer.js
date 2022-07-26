import React, { useEffect } from "react";
import logo from '../logo.svg';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/movieslice";
import Dashboard from "./Dashboard";
import Home from "./Home";




const HomeContainer = () => {


    const { isLoading, movies } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);


    return (

        <Home isLoading={isLoading} movies={movies} />

    );
};

export default HomeContainer;
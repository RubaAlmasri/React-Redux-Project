import React, { useEffect } from "react";
import logo from '../logo.svg';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, deleteMovies } from "../store/movieslice";
import Dashboard from "./Dashboard";




const Container = () => {


    const { isLoading, movies } = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);


    return (

        <Dashboard isLoading={isLoading} movies={movies} dispatch={dispatch} deleteMovies={deleteMovies} />

    );
};

export default Container;
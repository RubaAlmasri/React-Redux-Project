import React, { useEffect } from "react";
import logo from '../logo.svg';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/movieslice";
import Navbar from "./Navbar";




const Home = ({ isLoading, movies }) => {


    return (

        <>
            <Navbar />
            {
                isLoading ? ('Loading...') : (
                    <><div class="row">
                        {                                

                            movies?.map((movie) => (
                                    <div class="col-sm-3">
                                        <div class="card mt-5" style={{ width: '18rem', }}>
                                            <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Card image cap" width='100%' height='300'></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{movie.original_title}</h5>
                                                <p class="card-text text-truncate" style={{maxWidth: '500px',}}>{movie.overview}</p>
                                                <a href="#" class="btn btn-primary">See More</a>
                                            </div>
                                        </div>
                                    </div>
                            ))
                        }                                </div>

                    </>
                )
            }

        </>


    );
};

export default Home;
import React, { useEffect } from "react";
import logo from '../logo.svg';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/movieslice";
import Navbar from "./Navbar";




const Dashboard = ({ isLoading, movies, dispatch, deleteMovies }) => {


    const handleedit = (data) => {

        let { id, original_title, poster_path, overview } = data;
        localStorage.setItem('original_title', original_title);
        localStorage.setItem('poster_path', poster_path);
        localStorage.setItem('id', id);
        localStorage.setItem('overview', overview);


       
    };

    const handledelete = (id) => {

        dispatch(deleteMovies(id));


        // console.log(id);
        // dispatch(deleteMovies(id));
    };

    return (

        <>
            <Navbar />
            <br /><br /><br />

            {
                isLoading ? ('Loading...') : (
                    <>

                        <a class="btn btn-primary" href="/add">Add Movie</a><br /><br />
                        {/* <a class="btn btn-secondary" href="/">Go To Home</a><br /><br /> */}
                        <div className="App">
                            <table class="table">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Movie Name</th>
                                        <th scope="col">Movie Image</th>
                                        <th scope="col">Movie Description</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        movies?.map((movie) => (
                                            <tr>
                                                <td>{movie.id}</td>
                                                <td>{movie.original_title}</td>
                                                <td><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="image" width='100' height='100' /></td>
                                                <td class="text-truncate" style={{ maxWidth: '150px', }}>{movie.overview}</td>
                                                <td>
                                                    <a href='/edit' style={{ marginRight: '3%', marginLeft: '5%' }}>
                                                        <button class="btn btn-primary" onClick={() => handleedit(movie)}>Edit</button>
                                                    </a>
                                                    <button type="button" class="btn btn-danger" onClick={() => handledelete(movie.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            }

        </>
    );
};

export default Dashboard;
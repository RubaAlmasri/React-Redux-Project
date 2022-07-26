import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { insertMovies } from "../store/movieslice";
import Navbar from './Navbar';


export default function AddForm() {


    const [original_title, setoriginal_title] = useState(null);
    const [poster_path, setposter_path] = useState(null);
    const [overview, setoverview] = useState(null);


    // const original_title = useRef(null);
    // const poster_path = useRef(null);
    // const overview = useRef(null);

    const { isLoading, movies } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(insertMovies());
    }, [dispatch]);

    const handlesubmit = () => {

        const data = {
            original_title:original_title,
            poster_path:poster_path,
            overview:overview,
        }
        // console.log(original_title.current.value);
        dispatch(insertMovies(data));
       
    };


    return (
        <>
        <Navbar/>
        <div class="container" style={{ marginTop: 200, paddingLeft: 400 }}>
            {/* <form> */}
            <div class="mb-3 w-50">
                <label class="form-label">Movie Name</label>
                <input type="text" class="form-control" onChange={(e) => setoriginal_title(e.target.value)}  required ></input>
            </div>
            <div class="mb-3 w-50">
                <label class="form-label">Movie Image</label>
                <input type="file" class="form-control" onChange={(e) => setposter_path(e.target.value)}  required ></input>
            </div>
            <div class="mb-3 w-50">
                <label class="form-label">Movie Description</label>
                <textarea class="form-control" onChange={(e) => setoverview(e.target.value)}  required ></textarea>
            </div>
            <button type="submit" class="btn btn-primary" onClick={handlesubmit}>Save</button>
            <a href='/dashboard' class='btn btn-secondary m-2'>Back</a>
            {/* </form> */}
        </div>
        
        </>
    )
}
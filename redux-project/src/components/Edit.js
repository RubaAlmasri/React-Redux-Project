import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useDispatch, useSelector } from "react-redux";
import { insertMovies } from "../store/movieslice";


export default function Edit() {

    const [id, setID] = useState(0);
    const [original_title, setoriginal_title] = useState('');
    const [poster_path, setposter_path] = useState('');
    const [overview, setoverview] = useState('');





    useEffect(() => {
        setID(localStorage.getItem('id'))
        setoriginal_title(localStorage.getItem('original_title'));
        setposter_path(localStorage.getItem('poster_path'));
        setoverview(localStorage.getItem('overview'));
    }, []);

    // const { isLoading, movies } = useSelector((state) => state.movies);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(insertMovies());
    // }, [dispatch]);

    const updateAPIData = () => {
        axios.put(`https://62baba8b573ca8f83289f6c8.mockapi.io/movies/${id}`, {
            original_title,
            overview,
        })

        // const data = {
        //     id:id,
        //     original_title: original_title,
        //     poster_path: poster_path,
        //     overview: overview,
        // }
        // // console.log(original_title.current.value);
        // dispatch(insertMovies(data));

    };

    return (
        <>
            <Navbar />
            <div class="container" style={{ marginTop: 200, paddingLeft: 400 }}>
                {/* <form> */}
                <div class="mb-3 w-50">
                    <label class="form-label">Movie Name</label>
                    <input type="text" class="form-control" value={original_title} onChange={(e) => setoriginal_title(e.target.value)}></input>
                </div>
                <div class="mb-3 w-50">
                    <label class="form-label">Movie Image</label>
                    <input type="file" class="form-control" onChange={(e) => setposter_path(e.target.value)} ></input>
                </div>
                <div class="mb-3 w-50">
                    <label class="form-label">Movie Description</label>
                    <textarea class="form-control" value={overview} onChange={(e) => setoverview(e.target.value)} ></textarea>
                </div>
                <button type="submit" class="btn btn-primary" onClick={updateAPIData}>Save</button>
                <a href='/dashboard' class='btn btn-secondary m-2'>Back</a>
                {/* </form> */}
            </div>

        </>
    )
}
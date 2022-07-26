import { configureStore } from "@reduxjs/toolkit";
import movieslice from "./movieslice";
import movies from "./movieslice";



export default configureStore({
    reducer:{movies,},
});



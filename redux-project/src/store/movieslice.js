import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getMovies = createAsyncThunk('movie/getMovies', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch('https://62baba8b573ca8f83289f6c8.mockapi.io/movies');
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const insertMovies = createAsyncThunk('movie/inserMovies', async (moviedata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch('https://62baba8b573ca8f83289f6c8.mockapi.io/movies',
            {
                method: 'POST',
                body: JSON.stringify(moviedata),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            });
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const editMovies = createAsyncThunk('movie/editMovies', async (moviedata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch(`https://62baba8b573ca8f83289f6c8.mockapi.io/movies/${moviedata.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(moviedata),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            });
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const deleteMovies = createAsyncThunk('movie/deleteMovies', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res =  await fetch(`https://62baba8b573ca8f83289f6c8.mockapi.io/movies/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            });
        // const data = await res.json();
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export const movieslice = createSlice({
    name: "movie",
    initialState: { movies: [], isLoading: false, error: null },
    extraReducers: {
        //get movies
        [getMovies.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
            console.log(action);
        },
        [getMovies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movies = action.payload;
            console.log(action);
        },
        [getMovies.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(action);
        },

        //insert movie
        [insertMovies.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [insertMovies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movies.push(action.payload);
        },
        [insertMovies.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },

    //delete movie
    [deleteMovies.pending]: (state, action) => {
        state.isLoading = true;
        state.error = null;
    },
    [deleteMovies.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.movies = state.movies.filter((el) => el.id !== action.payload);

    },
    [deleteMovies.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

    //edit movie
    [editMovies.pending]: (state, action) => {
        state.isLoading = true;
        state.error = null;
    },
    [editMovies.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.movies.push(action.payload);

    },
    [editMovies.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

});

export default movieslice.reducer;
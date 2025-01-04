// src/App.js
import React, { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";
import Movies from "./Components/Movies";

function App() {
  const [movies, setMovies] = useState(Movies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(null);
  const [showAddMoviePopup, setShowAddMoviePopup] = useState(false);
  const location = useLocation();

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating ? movie.rating >= filterRating : true)
  );

  return (
    <div className="w-full mx-auto p-4 h-full bg-darkPurple m-0">
      <h1 className="text-3xl font-bold text-center mb-6 bg-lightPurple p-4 rounded-lg text-darkRose w-full">
        Movie App
      </h1>
      {location.pathname === '/' && (
        <div className="flex flex-row items-baseline justify-between gap-2 h-auto">
          <Filter onTitleChange={setFilterTitle} onRatingChange={setFilterRating} />
          <button
            className="px-4 py-4 bg-darkRose text-white rounded-md hover:bg-purplle transition"
            onClick={() => setShowAddMoviePopup(true)}
          >
            Add Movie
          </button>
        </div>
      )}

      {showAddMoviePopup && (
        <AddMovie
          onClose={() => setShowAddMoviePopup(false)}
          onAddMovie={addMovie}
        />
      )}

      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
        <Route path="/movies/:title" element={<MovieDetails movies={movies} />}/>
      </Routes>
    </div>
  );
}

export default App;

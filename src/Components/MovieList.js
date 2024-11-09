import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className=" flex items-center justify-center w-full p-4" >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10 ">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;

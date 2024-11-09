import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.title}`}>
      <div className="w-full bg-lightPurple border border-gray-200 rounded-lg shadow-md p-4">
        <img className="w-full h-auto object-cover rounded-lg border border-gray-200" src={movie.posterURL} alt={movie.title} />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{movie.title}</h5>
          <p className="mb-3 font-normal text-paleRose">{movie.description}</p>
          <p className="font-semibold text-darkRose">Rating: {movie.rating}/5</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;

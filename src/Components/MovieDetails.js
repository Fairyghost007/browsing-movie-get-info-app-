import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDetails({ movies }) {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.title === title);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="w-full mx-auto p-4 h-auto lg:h-screen md:h-screen bg-darkPurple m-0">
      <div className=" flex justify-start">
        <button
          className="px-6 py-2 bg-darkRose text-white rounded hover:bg-purplle transition"
          onClick={() => navigate(-1)}
        >
          Back to Home
        </button>
      </div>
      <div className="text-white p-6">
        <h2 className="text-3xl font-bold text-center mb-8">{movie.title}</h2>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0 border border-gray-200 rounded-lg p-4 bg-paleRose-50 ">
            <p className="text-lg text-justify">{movie.longDescription}</p>
          </div>

          <div className="md:w-1/2 flex justify-center ">
            <iframe className="rounded-lg"
              width="100%"
              height="315"
              src={movie.trailerURL}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

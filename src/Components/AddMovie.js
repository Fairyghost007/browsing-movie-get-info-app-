import React, { useState } from 'react';

function AddMovie({ onClose, onAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterURL, rating: parseInt(rating) };
    onAddMovie(newMovie);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-lightPurple p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-darkRose">Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Poster URL</label>
            <input
              type="text"
              value={posterURL}
              onChange={(e) => setPosterURL(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Rating</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 bg-darkRose text-white rounded hover:bg-red-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-darkRose text-white rounded hover:bg-green-600"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;

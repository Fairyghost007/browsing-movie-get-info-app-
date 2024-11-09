function Filter({ onTitleChange, onRatingChange }) {
  return (
    <div className="flex gap-4 justify-center items-center self-center mb-4 bg-lightPurple p-4 mt-auto rounded-lg w-full">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onTitleChange(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
      />
      <input
        type="number"
        placeholder="0"
        min="1"
        max="5"
        onChange={(e) => onRatingChange(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-auto"
      />
     
    </div>
    
  );
}

export default Filter;

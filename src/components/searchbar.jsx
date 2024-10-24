import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; 

const SearchBar = () => {
  const [Which, setWhich] = useState('');
  const [releaseOutDate, setreleaseOutDate] = useState('');

  const handleSearch = () => {

    console.log("Which:", Which,  "release Out:", releaseOutDate);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex bg-white shadow-md rounded-full overflow-hidden">

        <div className="flex items-center px-4 border-r border-gray-200">
          <input
            type="text"
            placeholder="Where" 
            className="outline-none text-sm text-gray-600"
            value={Which}
            onChange={(e) => setWhich(e.target.value)}
          />
        </div>



        <div className="flex items-center px-4 border-r border-gray-200">
          <input
            type="date"
            placeholder="release-out"
            className="outline-none text-sm text-gray-600"
            value={releaseOutDate}
            onChange={(e) => setreleaseOutDate(e.target.value)}
          />
        </div>


        <button
          onClick={handleSearch}
          className="bg-yellow-500 text-white p-3 rounded-full flex items-center justify-center ml-4 hover:bg-red-600"
        >
          <FiSearch className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

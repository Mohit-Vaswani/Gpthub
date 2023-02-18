import { useState } from 'react';

const SearchBar = ({ prompts, setFilteredPrompts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredPrompts = prompts.filter((prompt) =>
      prompt.tag.toLowerCase().includes(term)
    );
    setFilteredPrompts(filteredPrompts);
  };

  return (
    <div className="mt-8 w-7/12 lg:w-4/12"> 
    {/* <div className="absolute top-60 sm:top-64 w-7/12 lg:w-4/12">  */}
      <input
        type="text"
        placeholder="Search by tag..."
        value={searchTerm}
        onChange={handleSearch}
        className="border bg-transparent border-gray-700 py-2 px-3 rounded-md w-full"
      />
    </div>
  );
};

export default SearchBar;

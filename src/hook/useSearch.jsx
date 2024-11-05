import { useState } from 'react';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // Actual search logic (API call or filter) goes here
    } else {
      console.log('Please enter a valid search term');
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
  };
};

export default useSearch;

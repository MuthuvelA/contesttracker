import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ContestsList from './ContestsList';

const ContestPage = () => {
  const [contests, setContests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContests('codechef');
    fetchContests('leetcode');
    fetchContests('codeforces');
  }, []); // Fetch contests only once on component mount

  const fetchContests = async (platform) => {
    try {
      const response = await axios.get(`https://contest-hive.vercel.app/api/${platform}`);
      if (response.data.ok) {
        setContests(prevContests => {
          const uniqueContests = response.data.data.filter(newContest => !prevContests.some(oldContest => oldContest.title === newContest.title));
          return [...prevContests, ...uniqueContests];
        });
      } else {
        console.error('Error fetching contests:', response.data.error);
      }
    } catch (error) {
      console.error('Error fetching contests:', error);
    } finally {
      setLoading(false); 
    }
  };
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredContests = contests.filter((contest) => {
    const platformMatch = filterType === 'all' || contest.platform.toLowerCase() === filterType.toLowerCase();
    const searchMatch = contest.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        contest.title.toLowerCase().includes(searchTerm.toLowerCase());
    return platformMatch && searchMatch;
  });

  return (
    <div className="contest-page">
      <div className="header">
        <h1>Online Coding Contests</h1>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search contests"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select value={filterType} onChange={handleFilterChange}>
            <option value="all">All Platforms</option>
            <option value="codechef">CodeChef</option>
            <option value="leetcode">LeetCode</option>
            <option value="codeforces">Codeforces</option>
          </select>
        </div>
      </div>
    
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="contest-list">
          <ContestsList contests={filteredContests} />
        </div>
      )}
    </div>
  );
};

export default ContestPage;

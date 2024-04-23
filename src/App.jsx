import React, { useState } from 'react';
import './App.css';

const ContestPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const contests = [
    {
      name: 'Leetcode Weekly Contest 123',
      type: 'weekly',
      startTime: '2 days',
      duration: '1 hour 30 minutes',
      link: 'Contest Link',
    },
    {
      name: 'CodeChef Starters 123',
      type: 'starter',
      startTime: '6 days',
      duration: '2 hours',
      link: 'Contest Link',
    },
    {
      name: 'Codeforce Round 123 Div 3',
      type: 'divisional',
      startTime: '9 days',
      duration: '2 hours',
      link: 'Contest Link',
    },
    // Add more contests here
  ];

  const filteredContests = contests.filter((contest) => {
    if (filterType === 'all') {
      return true;
    }
    return contest.type === filterType;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  return (
    <div className="contest-page">
      <h1>Online Coding Contests</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search contests"
          value={searchTerm}onChange={handleSearchChange}
        />
        <select value={filterType} onChange={handleFilterChange}>
          <option value="all">All Contests</option>
          <option value="weekly">Weekly Contests</option>
          <option value="starter">Starter Contests</option>
          <option value="divisional">Divisional Contests</option>
        </select>
      </div>
      <div className="contest-list">
        {filteredContests
          .filter((contest) => contest.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((contest) => (
            <div className="contest-item" key={contest.name}>
              <h2>{contest.name}</h2>
              <p>Type: {contest.type}</p>
              <p>Start Time: {contest.startTime}</p>
              <p>Duration: {contest.duration}</p>
              <a href={contest.link} target="_blank" rel="noopener noreferrer">
                Join Contest
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContestPage;
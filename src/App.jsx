import React from 'react';
import ContestsList from './ContestsList';

const App = () => {
  const contests = [
    {
      platform: 'Leetcode',
      name: 'Weekly Contest 123',
      startTime: '2 days',
      duration: '1 hour 30 minutes',
      link: 'LINK',
    },
    {
      platform: 'CodeChef',
      name: 'Starters 123',
      startTime: '6 days',
      duration: '2 hours',
      link: 'LINK',
    },
    {
      platform: 'Codeforce',
      name: 'Round 123 Div 3',
      startTime: '9 days',
      duration: '2 hour ',
      link: 'LINK',
    },
  ];

  return (
    <div className="app">
      <h1>Contest Hive</h1>
      <ContestsList contests={contests} />
    </div>
  );
};

export default App;
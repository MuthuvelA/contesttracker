import React from 'react';
import Contest from './Contest';

const ContestsList = ({ contests }) => (
  <div className="contests-list">
    {contests.map((contest, index) => (
      <Contest
        key={index}
        platform={contest.platform}
        name={contest.name}
        startTime={contest.startTime}
        duration={contest.duration}
        link={contest.link}
      />
    ))}
  </div>
);

export default ContestsList;
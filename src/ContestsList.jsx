import React from 'react';
import Contest from './Contest';
import "./App.css"
const ContestsList = ({ contests }) => (
  <div className="contest-list">
    {contests.map((contest, index) => (
       <Contest
        key={index}
        title={contest.title}
        startTime={contest.startTime}
        endTime={contest.endTime}
        duration={contest.duration}
        url={contest.url}
        platform={contest.platform}
        
      />
    ))}
  </div>
);

export default ContestsList;

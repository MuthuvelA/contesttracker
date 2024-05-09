// Contest.jsx
import React from 'react';
import "./App.css"

const Contest = ({ title, startTime, endTime, duration, url, platform }) => {
  const getPlatformLogo = (platform) => {
    switch ((platform || '').toLowerCase()) {
      case 'codechef':
        return 'codechef-logo.png'; 
      case 'leetcode':
        return 'LeetCode_logo_black.png'; 
      case 'codeforces':
        return 'codeforces-logo.png'; 
      default:
        return 'default-logo.png'; 
    }
  };

  return (
    <div className="contest-item">
      <div className="logo-container">
        <img src={getPlatformLogo(platform)} alt={`${platform} Logo`} className="platform-logo" />
      </div>
      <div className="contest-details">
        <h2>{title}</h2>
        <p>Start Time: {startTime}</p>
        <p>End Time: {endTime}</p>
        <p>Duration: {duration/60} minutes</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Join Contest
        </a>
      </div>
    </div>
  );
};

export default Contest;

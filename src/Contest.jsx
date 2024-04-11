import React from 'react';

const Contest = ({ platform, name, startTime, duration, link }) => (
  <div className="contest">
    <div className="platform">{platform}</div>
    <div className="name">{name}</div>
    <div className="details">
      <span>Start Time: {startTime}</span>
      <span>Duration: {duration}</span>
    </div>
    <a className="link" href={link} target="_blank" rel="noreferrer">
      Contest Link
    </a>
  </div>
);

export default Contest;
import React from 'react';
import bountiesData from './flow/bounties.json';

const MarsBountiesList = () => {
  return (
    <div>
      <h1>Mars Colony Bounties</h1>
      <ul>
        {bountiesData.bounties.map((bounty, index) => (
          <li key={index}>
            <h2>{bounty.name} (Price: {bounty.price})</h2>
            <p>{bounty.description}</p>
            <p>Assigned by: {bounty.assigner}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarsBountiesList;

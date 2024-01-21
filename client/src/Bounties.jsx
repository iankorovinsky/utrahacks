import React from 'react';
import bountiesData from './flow/bounties.json';
import { runScript } from './flow/transaction'; // Import runScript

const MarsBountiesList = () => {

    
  
  const handleTransaction = async (bounty, index) => {
    await runScript(bounty.price); // Call runScript with the bounty price

    // After the script is run, send a request to remove the bounty
    try {
        const response = await fetch('http://localhost:5000/remove-bounty', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ index }), // Send the index or unique identifier
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        console.log("Bounty removed successfully");
    } catch (error) {
        console.error("Error in removing bounty:", error);
    }
};


    return (
      <div>
        <h1 className='text-white font-medium p-4 text-4xl font-'>Mars Colony Bounties</h1>
        <ul className='grid grid-cols-3 gap-4 m-4 text-white'>
          {bountiesData.bounties.map((bounty, index) => (
                <li key={index} className='flex flex-col border border-3 rounded-lg'>
                    <div className='flex-grow p-2'>
                        <h2 className='font-bold'>{bounty.name} (Price: {bounty.price})</h2>
                        <div className='mt-2 rounded-md overflow-hidden'>
                          <img src={bounty.image} className='h-96 w-full object-cover'/>
                        </div>
                        <p>{bounty.description}</p>
                        <p>Assigned by: {bounty.assigner}</p>
                    </div>
                    <button 
                        className='flex align-items justify-center border border-1 w-1/4 m-1.5 rounded-xl'
                        onClick={() => handleTransaction(bounty, index)}
                    >
                        Claim Bounty
                    </button>

                </li>
          ))}
        </ul>
      </div>
    );
};
  
export default MarsBountiesList;

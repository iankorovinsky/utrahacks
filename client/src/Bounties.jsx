import React from 'react';
import bountiesData from './flow/bounties.json';
import { runScript } from './flow/transaction'; // Import runScript

const MarsBountiesList = () => {

    
    const handleTransaction = async (bounty, index) => {
        try {
            await runScript(bounty.price);
    
            // Remove Bounty
            const removeResponse = await fetch('http://localhost:5002/remove-bounty', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ index }),
            });
            if (!removeResponse.ok) throw new Error('Error in removing bounty');
                console.log("Bounty removed successfully");
    
            // Mint NFT
            const mintResponse = await fetch('http://localhost:5002/mint-nft', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bounty),
            });
            if (!mintResponse.ok) throw new Error('Error in minting NFT');
            const mintResponseData = await mintResponse.json();
            console.log("NFT minted successfully:", mintResponseData);
    
            // Open transaction URL if available
            if (mintResponseData.transaction_external_url) {
                window.open(mintResponseData.transaction_external_url, '_blank');
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    // Example usage
    // mintNFT({ /* ... bounty data ... */ });
    


    return (
      <div>
        <h1 className='text-white font-medium p-4 text-4xl'>Mars Colony Bounties</h1>
        <ul className='grid grid-cols-3 gap-8 m-4 mx-6 text-white'>
          {bountiesData.bounties.map((bounty, index) => (
                <li key={index} className='flex flex-col transition ease-in-out duration-150 border border-3 rounded-lg hover:bg-slate-800 hover:scale-105'>
                    <div className='flex-grow p-2'>
                        <h2 className='font-bold text-2xl'>{bounty.name} (Price: {bounty.price})</h2>
                        <div className='mt-2 rounded-md overflow-hidden'>
                          <img src={bounty.image} className='h-96 w-full object-cover'/>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p>{bounty.description}</p>
                            <p className='text-gray-300'>Assigned by: {bounty.assigner}</p>
                        </div>
                    </div>
                    <button 
                        className='flex transition ease-in-out align-items justify-center border border-1 w-1/4 m-1.5 rounded-xl hover:bg-white hover:text-slate-900'
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

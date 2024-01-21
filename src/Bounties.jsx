import bountiesData from './flow/bounties.json';

const MarsBountiesList = () => {
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
                    <button className='flex align-items justify-center border border-1 w-1/4 m-1.5 rounded-xl'>
                        Claim Bounty
                    </button>
                </li>
          ))}
        </ul>
      </div>
    );
};
  
export default MarsBountiesList;
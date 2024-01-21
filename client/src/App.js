import React from 'react';
import MarsBountiesList from './bounties'; // Adjust the path as necessary
import TransactionButton from './TransactionButton'; // Adjust the path as necessary
import FormComponent from './FormComponent';


const App = () => {
  return (
    <div>
      <div>
        <MarsBountiesList />
        <TransactionButton />
        <div className="App">
            <h1>Form Submission</h1>
            <FormComponent />
        </div>
      </div>
       
      </div>
  );
};

export default App;
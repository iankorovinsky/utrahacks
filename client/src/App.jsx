import MarsBountiesList from './Bounties.jsx'; // Adjust the path as necessary
import TransactionButton from './TransactionButton.jsx';
import FormComponent from './FormComponent.jsx';

function App() {

  return (
    <>
      <div className='w-screen h-screen'>
        <MarsBountiesList />
        <TransactionButton />
        <FormComponent />
      </div>
    </>
  )
}

export default App

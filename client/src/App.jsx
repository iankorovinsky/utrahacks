import MarsBountiesList from './Bounties.jsx'; // Adjust the path as necessary
import TransactionButton from './TransactionButton.jsx';
import FormComponent from './FormComponent.jsx';
import Navbar from './Navbar.jsx';

function App() {

  return (
    <>
      <div className='w-screen h-screen'>
        <Navbar/>
        <MarsBountiesList />
        <TransactionButton />
        <FormComponent />
      </div>
    </>
  )
}

export default App

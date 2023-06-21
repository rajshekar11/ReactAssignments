
import './App.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container text-center my-3">
      <header >
       <h1>Counter App</h1>
      </header>
      <Counter></Counter>
    </div>
    </>
  );
    
}

export default App;

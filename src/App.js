
import './App.css';

import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='workingArea'>
      <Navbar/>
      <Home/>
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;

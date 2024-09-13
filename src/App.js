import Navbar from './components/Navbar';
import Home from './components/Home';
import Feature from './components/Feature';
import Integration from './components/Integration';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Feature/>
      <Integration/>
    </div>
  );
}

export default App;

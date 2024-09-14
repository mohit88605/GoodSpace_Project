import Navbar from './components/Navbar';
import Home from './components/Home';
import Feature from './components/Feature';
import Integration from './components/Integration';
import Customer from './components/Customer';
import Details from './components/Details';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Feature/>
      <Integration/>
      <Customer/>
      <Details/>
      <Footer/>
    </div>
  );
}

export default App;

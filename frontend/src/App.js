import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Scenario from './components/Scenario';
import Summary from './components/Summary';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Scenario />
      <Summary />
      <Footer />
    </div>
  );
}

export default App;

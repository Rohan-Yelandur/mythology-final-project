import Hero from './components/Hero';
import About from './components/About';
import Scenario from './components/Scenario';
import Summary from './components/Summary';
import Footer from './components/Footer';
import scenarios from './data/scenarios.json';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Scenario scenario={scenarios[0]} />
      <Summary />
      <Footer />
    </div>
  );
}

export default App;

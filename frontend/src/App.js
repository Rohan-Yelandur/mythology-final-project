import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Scenario from './components/Scenario';
import Summary from './components/Summary';
import Footer from './components/Footer';
import scenarios from './data/scenarios.json';

function App() {
  const [shownCount, setShownCount] = useState(0);
  const [choices, setChoices] = useState({});

  const lastScenario = scenarios[scenarios.length - 1];
  const finished = shownCount === scenarios.length && choices[lastScenario.id];

  function playAgain() {
    setShownCount(0);
    setChoices({});
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Hero />
      <About started={shownCount > 0} onStart={() => setShownCount(1)} />
      {scenarios.slice(0, shownCount).map((scenario, i) => (
        <Scenario
          key={scenario.id}
          scenario={scenario}
          chosen={choices[scenario.id]}
          onChoose={(choiceId) => setChoices({ ...choices, [scenario.id]: choiceId })}
          showContinue={i === shownCount - 1 && i < scenarios.length - 1}
          onContinue={() => setShownCount(shownCount + 1)}
        />
      ))}
      {finished && <Summary scenarios={scenarios} choices={choices} onPlayAgain={playAgain} />}
      <Footer />
    </div>
  );
}

export default App;

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
  const [finished, setFinished] = useState(false);

  function finish() {
    fetch('/api/votes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ choices: choices })
    });
    setFinished(true);
  }

  function playAgain() {
    setShownCount(0);
    setChoices({});
    setFinished(false);
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Hero />
      <About started={shownCount > 0} onStart={() => setShownCount(1)} />
      {scenarios.slice(0, shownCount).map((scenario, i) => {
        const isLast = i === scenarios.length - 1;
        return (
          <Scenario
            key={scenario.id}
            scenario={scenario}
            chosen={choices[scenario.id]}
            onChoose={(choiceId) => setChoices({ ...choices, [scenario.id]: choiceId })}
            showContinue={i === shownCount - 1 && !finished}
            continueText={isLast ? 'Finish' : 'Continue'}
            onContinue={isLast ? finish : () => setShownCount(shownCount + 1)}
          />
        );
      })}
      {finished && <Summary scenarios={scenarios} choices={choices} onPlayAgain={playAgain} />}
      <Footer />
    </div>
  );
}

export default App;

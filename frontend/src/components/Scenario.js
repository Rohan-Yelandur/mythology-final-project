import { useState } from 'react';
import AccordionGallery from './AccordionGallery';
import './Scenario.css';

function Scenario({ scenario }) {
  const [chosen, setChosen] = useState(null);

  const items = scenario.choices.map((choice, i) => ({
    image: choice.image,
    align: i === 0 ? 'right' : 'left',
    selected: choice === chosen,
    label: choice === chosen ? `✓ ${choice.text}` : choice.text
  }));

  const poemChoice = scenario.choices.find((choice) => choice.id === scenario.poemChoice);

  return (
    <section className="scenario">
      <h2 className="scenario-title">{scenario.title}</h2>
      <p className="scenario-citation">{scenario.citation}</p>
      <p className="scenario-setup">{scenario.setup}</p>

      <div className="scenario-choices">
        <AccordionGallery
          items={items}
          defaultIndex={-1}
          expandRatio={0.75}
          height={620}
          gap={4}
          tilt={0}
          accentColor="#d4a64a"
          overlayColor="#000000"
          textColor="#f1e6cf"
          onSelect={(i) => setChosen(scenario.choices[i])}
        />
      </div>

      {chosen && (
        <div className="scenario-reveal">
          <h3>What happened</h3>
          <p>
            In the story: <strong>{poemChoice.text}</strong>
          </p>
          <p>{scenario.outcome}</p>

          <h3>How others chose</h3>
          <p>No votes yet.</p>

          <h3>What it means</h3>
          <p>{scenario.analysis}</p>
        </div>
      )}
    </section>
  );
}

export default Scenario;

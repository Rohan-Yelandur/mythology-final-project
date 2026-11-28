import './About.css';

function About({ started, onStart }) {
  return (
    <section className="about">
      <h2 className="about-heading">The Journey Ahead</h2>
      <p>
        It is the 12th century BCE in ancient Greece, and the 10 year Trojan war has just ended.
        The city of Troy has fallen and you are a Greek war hero! Now it is time to journey back home 
        to Ithaca, and reclaim your throne. On your travels you may encounter events that Odysseus faced in his famous voyage.
      </p>
      <img className="about-map" src="/greece_map.png" alt="Map of Odysseus' possible route home across the Mediterranean" />
      <p>
        Each scenario before you will present 2 choices, and you can pick whichever feels right. 
        After you choose, you'll see how other players picked, and how events of the story relate
        to a larger thesis.
      </p>
      {!started && (
        <button className="about-button" onClick={onStart}>
          Set sail
        </button>
      )}
    </section>
  );
}

export default About;

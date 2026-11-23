import ScrollExpand from './ScrollExpand';
import './Hero.css';

function Hero() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const size = Math.min(width * 0.85, height * 0.6);

  return (
    <ScrollExpand
      src="/ship_sunrise_painting.jpg"
      alt="Painting of a ship at sunrise"
      title="The Odyssey"
      startWidth={(size / width) * 100}
      startHeight={(size / height) * 100}
      scrollHint={
        <>
          Scroll to set sail
          <span className="hero-arrow">↓</span>
        </>
      }
      useWindowScroll
    >
      <p className="hero-subheading">Odyssey Edition</p>
      <h1 className="hero-heading">What Would You Do</h1>
      <p className="hero-credit">
        J.M.W. Turner, <em>Ulysses Deriding Polyphemus</em> (1829), National Gallery, London
      </p>
    </ScrollExpand>
  );
}

export default Hero;

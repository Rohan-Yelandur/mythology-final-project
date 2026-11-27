import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <img className="hero-image" src="/ship_sunrise_painting.jpg" alt="Painting of a ship at sunrise" />
      <div className="hero-text">
        <h1 className="hero-heading">What Would You Do</h1>
        <p className="hero-subheading">Odyssey Edition</p>
      </div>
      <p className="hero-credit">
        J.M.W. Turner, <em>Ulysses Deriding Polyphemus</em> (1829), National Gallery, London
      </p>
    </section>
  );
}

export default Hero;

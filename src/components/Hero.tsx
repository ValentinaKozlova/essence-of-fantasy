import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-orbs">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="inner hero__inner">
        <h3 className="hero__title">
          Valentyna Kozlova
        </h3>

        <nav className="hero__roles">
          <span className="hero__role">Session Singer</span>
          <span className="hero__role-sep">|</span>
          <span className="hero__role">Song Writer</span>
          <span className="hero__role-sep">|</span>
          <span className="hero__role">Screenwriter</span>
        </nav>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll to explore</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  );
}

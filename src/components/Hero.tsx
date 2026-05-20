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
          <a href="#session-singer" className="hero__role-link">Session Singer</a>
          <span className="hero__role-sep">|</span>
          <a href="#songwriting" className="hero__role-link">Song Writer</a>
          <span className="hero__role-sep">|</span>
          <span className="hero__role-link hero__role-link--plain">Screenwriter</span>
        </nav>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll to explore</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  );
}

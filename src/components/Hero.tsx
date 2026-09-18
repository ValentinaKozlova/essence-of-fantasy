import './Hero.css';
import bannerImage from '../img/banner-vk.png';

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-orbs">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="inner hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Vocalist in Prague</p>
          <h1 className="hero__title">Valentyna Kozlova</h1>
          <p className="hero__roles">Session Singer | Song Writer | Screen Writer</p>
        </div>

        <div className="hero__image-wrap">
          <img
            className="hero__image"
            src={bannerImage}
            alt="Valentyna Kozlova"
          />
        </div>
      </div>
    </section>
  );
}

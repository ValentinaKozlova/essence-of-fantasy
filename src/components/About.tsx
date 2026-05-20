import avatarUrl from "../img/vk-avatar.jpg";
import "./About.css";

export function About() {
  return (
    <section className="about" id="about">
      <div className="inner">
        <div className="about__image-wrap">
          <div className="about__image-placeholder">
            <img
              src={avatarUrl}
              alt="Valentyna Kozlova"
              className="about__avatar"
            />
          </div>
          <div className="about__image-glow" />
        </div>

        <div className="about__content">
          <p className="about__eyebrow">The Artist</p>
          <h2 className="about__title">About</h2>

          <p className="about__bio">
            I'm a session vocalist with 12+ years' experience, a songwriter, and
            a screenwriter.
          </p>
          <p className="about__bio">
            <em>Essence of Fantasy</em> is my project where music lives at the
            intersection of cinematic storytelling and ethereal sound — weaving
            heartfelt lyrics, atmospheric melodies, and emotionally rich
            arrangements.
          </p>
          <p className="about__bio">
            My music is available on all major streaming platforms. I also share
            behind-the-scenes content and exclusive releases on Patreon — join
            to support my work and get early access to new material and studio
            updates.
          </p>

          {/* <div className="about__tags">
            {['Singer-Songwriter', 'Session Vocalist', 'Screenwriter', 'Composer'].map(tag => (
              <span key={tag} className="about__tag">{tag}</span>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

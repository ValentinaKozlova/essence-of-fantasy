import avatarUrl from '../img/vk-avatar.jpg';
import './About.css';

export function About() {
  return (
    <section className="about" id="about">
      <div className="inner">
        <div className="about__image-wrap">
          <div className="about__image-placeholder">
            <img src={avatarUrl} alt="Valentyna Kozlova" className="about__avatar" />
          </div>
          <div className="about__image-glow" />
        </div>

        <div className="about__content">
          <p className="about__eyebrow">The Artist</p>
          <h2 className="about__title">About</h2>

          <p className="about__bio">
            Valentyna Kozlova is a singer-songwriter, session vocalist, and
            screenwriter. She's the author of a project <em>Essence of Fantasy</em>. Her music lives at
            the boundary between cinematic storytelling and ethereal sound, weaving together
            heartfelt lyrics, atmospheric melodies, and emotionally rich arrangements.
          </p>
          <p className="about__bio">
            She has 12+ years of experience as a session singer.
          </p>
          <p className="about__bio">
            Her work is available on all major streaming platforms, and she actively connects
            with her audience through Patreon, where supporters get exclusive access to her
            creative process.
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

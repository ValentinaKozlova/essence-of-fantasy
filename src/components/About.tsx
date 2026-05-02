import './About.css';

export function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__image-wrap">
          <div className="about__image-placeholder">
            <span className="about__initials">VK</span>
          </div>
          <div className="about__image-glow" />
        </div>

        <div className="about__content">
          <p className="about__eyebrow">The Artist</p>
          <h2 className="about__title">About</h2>

          <p className="about__bio">
            Valentyna Kozlova is a versatile artist — singer-songwriter, session vocalist, and
            screenwriter — known for her project <em>Essence of Fantasy</em>. Her music lives at
            the boundary between cinematic storytelling and ethereal sound, weaving together
            heartfelt lyrics, atmospheric melodies, and emotionally rich arrangements.
          </p>
          <p className="about__bio">
            As a session singer she brings warmth and depth to a wide range of productions,
            lending her voice to tracks across multiple genres. As a screenwriter she channels
            the same narrative instinct into visual storytelling, crafting worlds where music
            and image move as one.
          </p>
          <p className="about__bio">
            Her work is available on all major streaming platforms, and she actively connects
            with her audience through Patreon, where supporters get exclusive access to her
            creative process.
          </p>

          <div className="about__tags">
            {['Singer-Songwriter', 'Session Vocalist', 'Screenwriter', 'Composer'].map(tag => (
              <span key={tag} className="about__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

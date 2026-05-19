import { artists } from '../data/music';
import './Artists.css';

export function Artists() {
  return (
    <section className="artists" id="artists">
      <div className="inner">
        <div className="artists__header">
          <p className="artists__label">Spotlight</p>
          <h2 className="artists__title">Featured Artists</h2>
          <p className="artists__subtitle">
            Discover the visionaries shaping the sound of tomorrow.
          </p>
        </div>

        <div className="artists__grid">
          {artists.map(artist => (
            <div key={artist.id} className="artist-card">
              <div className="artist-card__top">
                <div
                  className="artist-card__avatar"
                  style={{ background: artist.avatarGradient }}
                >
                  <span className="artist-card__avatar-initial">
                    {artist.name[0]}
                  </span>
                  <div className="artist-card__avatar-ring" />
                </div>
                <div className="artist-card__head-info">
                  <h3 className="artist-card__name">{artist.name}</h3>
                  <span className="artist-card__genre">{artist.genre}</span>
                </div>
              </div>

              <p className="artist-card__bio">{artist.bio}</p>

              <div className="artist-card__stats">
                <div className="artist-card__stat">
                  <span className="artist-card__stat-val">{artist.followers}</span>
                  <span className="artist-card__stat-lbl">Followers</span>
                </div>
                <div className="artist-card__divider" />
                <div className="artist-card__stat">
                  <span className="artist-card__stat-val">{artist.monthlyListeners}</span>
                  <span className="artist-card__stat-lbl">Monthly Listeners</span>
                </div>
              </div>

              <div className="artist-card__tracks">
                <p className="artist-card__tracks-label">Top Tracks</p>
                <ul>
                  {artist.topTracks.map((track, i) => (
                    <li key={track}>
                      <span className="artist-card__track-num">{i + 1}</span>
                      <span className="artist-card__track-name">{track}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="artist-card__follow-btn">Follow Artist</button>
            </div>
          ))}
        </div>
      </div>

      <div className="artists__cta-strip">
        <div className="artists__cta-inner">
          <div>
            <h3 className="artists__cta-title">Are you an artist?</h3>
            <p className="artists__cta-sub">Share your music with millions of listeners worldwide.</p>
          </div>
          <button className="artists__cta-btn">Upload Your Music →</button>
        </div>
      </div>
    </section>
  );
}

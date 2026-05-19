import { albums } from '../data/music';
import './Albums.css';

export function Albums() {
  return (
    <section className="albums" id="albums">
      <div className="inner">
        <div className="albums__header">
          <div>
            <p className="albums__label">Explore</p>
            <h2 className="albums__title">Latest Albums</h2>
          </div>
          <button className="albums__view-all">View all →</button>
        </div>

        <div className="albums__grid">
          {albums.map(album => (
            <div key={album.id} className="album-card">
              <div className="album-card__cover-wrap">
                <div
                  className="album-card__cover"
                  style={{ background: album.coverGradient }}
                >
                  <div className="album-card__overlay">
                    <button className="album-card__play-btn">▶</button>
                  </div>
                </div>
              </div>
              <div className="album-card__body">
                <span className="album-card__genre">{album.genre}</span>
                <h3 className="album-card__title">{album.title}</h3>
                <p className="album-card__meta">{album.artist} · {album.year}</p>
                <p className="album-card__tracks">{album.trackCount} tracks</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

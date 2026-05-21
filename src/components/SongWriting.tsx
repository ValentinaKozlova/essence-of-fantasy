import { useState } from 'react';
import './SongWriting.css';

const songs = [
  { id: '5jN-6Srj1xc', title: 'Awakening', duration: '3:45' },
  { id: 'Qb4wyzLbMsk', title: 'Rebirth', duration: '4:12' },
  { id: 'KUl3W889ICY', title: 'Sweet Escape', duration: '3:58' },
  { id: 'WStseqhPpb4', title: 'Childhood Memories', duration: '4:30' },
  { id: 'k6jT_QgnS6U', title: 'Remember Who You Are', duration: '3:22' },
];

export function SongWriting() {
  const [activeId, setActiveId] = useState<string | null>(null);

  function toggle(id: string) {
    setActiveId(prev => (prev === id ? null : id));
  }

  return (
    <section className="songwriting" id="songwriting">
      <div className="inner">
        <div className="songwriting__header">
          <p className="eyebrow">Original Music</p>
          <h2 className="title songwriting__title">Song Writing</h2>
          <p className="songwriting__desc">
            Original compositions that weave storytelling with ethereal soundscapes.
          </p>
        </div>

        <div className="songwriting__playlist">
          <div className="songwriting__playlist-head">
            <span>#</span>
            <span>Title</span>
            <span className="songwriting__col-duration">Duration</span>
          </div>

          <div className="songwriting__tracks">
            {songs.map((song, i) => {
              const active = activeId === song.id;
              return (
                <button
                  key={song.id}
                  className={`songwriting__track${active ? ' songwriting__track--active' : ''}`}
                  onClick={() => toggle(song.id)}
                  aria-pressed={active}
                >
                  <div className="songwriting__track-num">
                    {active
                      ? <span className="songwriting__bars"><span/><span/><span/></span>
                      : <span className="songwriting__track-index">{i + 1}</span>
                    }
                    <svg className="songwriting__play-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <img
                    className="songwriting__track-thumb"
                    src={`https://img.youtube.com/vi/${song.id}/mqdefault.jpg`}
                    alt={song.title}
                    loading="lazy"
                  />
                  <div className="songwriting__track-info">
                    <span className="songwriting__track-title">{song.title}</span>
                    <span className="songwriting__track-artist">Valentyna Kozlova</span>
                  </div>
                  <span className="songwriting__track-duration">{song.duration}</span>
                </button>
              );
            })}
          </div>
        </div>

        {activeId && (
          <div className="songwriting__player">
            <iframe
              key={activeId}
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
              title="Now Playing"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
}

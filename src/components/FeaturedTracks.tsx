import { useState } from 'react';
import { tracks } from '../data/music';
import './FeaturedTracks.css';

interface FeaturedTracksProps {
  onPlay: (trackId: number) => void;
  isPlaying: boolean;
  currentTrackId: number | null;
}

type Filter = 'all' | 'trending' | 'new';

export function FeaturedTracks({ onPlay, isPlaying, currentTrackId }: FeaturedTracksProps) {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = tracks.filter(t => {
    if (filter === 'trending') return t.isTrending;
    if (filter === 'new') return t.isNew;
    return true;
  });

  return (
    <section className="tracks" id="discover">
      <div className="inner">
        <div className="tracks__header">
          <div>
            <p className="tracks__label">What's Hot</p>
            <h2 className="tracks__title">Featured Tracks</h2>
          </div>
          <div className="tracks__filters">
            {(['all', 'trending', 'new'] as Filter[]).map(f => (
              <button
                key={f}
                className={`tracks__filter-btn ${filter === f ? 'tracks__filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : f === 'trending' ? '🔥 Trending' : '✨ New'}
              </button>
            ))}
          </div>
        </div>

        <div className="tracks__table">
          <div className="tracks__table-head">
            <span className="tracks__col-num">#</span>
            <span className="tracks__col-title">Title</span>
            <span className="tracks__col-album">Album</span>
            <span className="tracks__col-plays">Plays</span>
            <span className="tracks__col-duration">Duration</span>
          </div>

          {filtered.map((track, idx) => {
            const active = currentTrackId === track.id;
            const playing = active && isPlaying;
            return (
              <div
                key={track.id}
                className={`tracks__row ${active ? 'tracks__row--active' : ''}`}
                onClick={() => onPlay(track.id)}
              >
                <span className="tracks__col-num">
                  {playing ? (
                    <span className="tracks__mini-bars">
                      <span /><span /><span />
                    </span>
                  ) : (
                    <span className="tracks__row-num">{idx + 1}</span>
                  )}
                  <span className="tracks__play-hover">▶</span>
                </span>

                <div className="tracks__col-title">
                  <div
                    className="tracks__cover"
                    style={{ background: track.coverGradient }}
                  />
                  <div className="tracks__info">
                    <span className="tracks__name">{track.title}</span>
                    <span className="tracks__artist">{track.artist}</span>
                  </div>
                  {track.isTrending && <span className="tracks__badge tracks__badge--hot">Trending</span>}
                  {track.isNew && <span className="tracks__badge tracks__badge--new">New</span>}
                </div>

                <span className="tracks__col-album">{track.album}</span>
                <span className="tracks__col-plays">{track.plays}</span>
                <span className="tracks__col-duration">{track.duration}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

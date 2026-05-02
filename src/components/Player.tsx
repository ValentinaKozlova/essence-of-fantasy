import { useState, useEffect, useRef } from 'react';
import { tracks, featuredTrack } from '../data/music';
import type { Track } from '../data/music';
import './Player.css';

interface PlayerProps {
  currentTrackId: number | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const allTracks: Track[] = [featuredTrack, ...tracks];

export function Player({ currentTrackId, isPlaying, onPlayPause, onNext, onPrev }: PlayerProps) {
  const [progress, setProgress] = useState(22);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const track = allTracks.find(t => t.id === currentTrackId) ?? allTracks[0];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress(p => (p >= 100 ? 0 : p + 0.15));
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const formatTime = (pct: number, duration: string) => {
    const [minStr, secStr] = duration.split(':');
    const totalSecs = parseInt(minStr) * 60 + parseInt(secStr);
    const current = Math.floor((pct / 100) * totalSecs);
    const m = Math.floor(current / 60);
    const s = current % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (currentTrackId === null) return null;

  return (
    <div className="player">
      <div className="player__track">
        <div
          className="player__cover"
          style={{ background: track.coverGradient }}
        >
          {isPlaying && (
            <div className="player__cover-bars">
              <span /><span /><span />
            </div>
          )}
        </div>
        <div className="player__track-info">
          <span className="player__track-name">{track.title}</span>
          <span className="player__track-artist">{track.artist}</span>
        </div>
        <button className="player__like-btn" title="Like">♡</button>
      </div>

      <div className="player__center">
        <div className="player__controls">
          <button
            className={`player__ctrl-btn ${isShuffle ? 'player__ctrl-btn--active' : ''}`}
            onClick={() => setIsShuffle(s => !s)}
            title="Shuffle"
          >⇄</button>
          <button className="player__ctrl-btn player__ctrl-btn--nav" onClick={onPrev} title="Previous">⏮</button>
          <button className="player__play-btn" onClick={onPlayPause} title={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="player__ctrl-btn player__ctrl-btn--nav" onClick={onNext} title="Next">⏭</button>
          <button
            className={`player__ctrl-btn ${isRepeat ? 'player__ctrl-btn--active' : ''}`}
            onClick={() => setIsRepeat(r => !r)}
            title="Repeat"
          >↺</button>
        </div>

        <div className="player__progress">
          <span className="player__time">{formatTime(progress, track.duration)}</span>
          <div
            className="player__bar"
            onClick={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              setProgress(((e.clientX - rect.left) / rect.width) * 100);
            }}
          >
            <div className="player__bar-fill" style={{ width: `${progress}%` }}>
              <div className="player__bar-thumb" />
            </div>
          </div>
          <span className="player__time">{track.duration}</span>
        </div>
      </div>

      <div className="player__right">
        <button
          className="player__vol-btn"
          onClick={() => setIsMuted(m => !m)}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || volume === 0 ? '🔇' : volume < 50 ? '🔉' : '🔊'}
        </button>
        <div
          className="player__vol-bar"
          onClick={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            setVolume(Math.round(((e.clientX - rect.left) / rect.width) * 100));
            setIsMuted(false);
          }}
        >
          <div
            className="player__vol-fill"
            style={{ width: `${isMuted ? 0 : volume}%` }}
          />
        </div>
      </div>
    </div>
  );
}

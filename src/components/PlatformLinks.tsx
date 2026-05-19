import './PlatformLinks.css';

const platforms = [
  {
    name: 'Patreon',
    url: 'https://www.patreon.com/c/aeternitas',
    color: '#FF424D',
    icon: '♥',
    label: 'Support on',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/3xuWpagkGgvvSgkOKAB8RJ',
    color: '#1DB954',
    icon: '◉',
    label: 'Listen on',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/essence-of-fantasy/1517575362',
    color: '#FC3C44',
    icon: '♪',
    label: 'Listen on',
  },
  {
    name: 'Amazon Music',
    url: 'https://music.amazon.com/artists/B089WD7HYM/essence-of-fantasy',
    color: '#00A8E0',
    icon: '▶',
    label: 'Listen on',
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UCQBhzJlSQbb-miSdX6KVrNA',
    color: '#FF0000',
    icon: '▶',
    label: 'Listen on',
  },
];

export function PlatformLinks() {
  return (
    <section className="platforms" id="links">
      <div className="inner">
        <p className="platforms__eyebrow">Find Me On</p>
        <h2 className="platforms__title">Listen &amp; Support</h2>
        <div className="platforms__grid">
          {platforms.map(p => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platforms__card"
              style={{ '--platform-color': p.color } as React.CSSProperties}
            >
              <span className="platforms__icon" style={{ color: p.color }}>{p.icon}</span>
              <div className="platforms__info">
                <span className="platforms__sublabel">{p.label}</span>
                <span className="platforms__name">{p.name}</span>
              </div>
              <span className="platforms__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

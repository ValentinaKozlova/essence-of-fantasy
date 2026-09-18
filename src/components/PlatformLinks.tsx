import "./PlatformLinks.css";
import patreonIcon from "../assets/patreon.svg";
import spotifyIcon from "../assets/spotify.svg";
import appleMusicIcon from "../assets/apple-music.svg";
import amazonMusicIcon from "../assets/amazon-music.svg";
import youtubeIcon from "../assets/youtube.svg";

const platforms = [
  {
    name: "Patreon",
    url: "https://www.patreon.com/c/aeternitas",
    icon: (
      <img src={patreonIcon} alt="Patreon logo" style={{ height: 24, width: 24 }} />
    ),
    label: "Support on",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3xuWpagkGgvvSgkOKAB8RJ",
    icon: (
      <img src={spotifyIcon} alt="Spotify logo" style={{ height: 24, width: 24 }} />
    ),
    label: "Listen on",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/essence-of-fantasy/1517575362",
    icon: (
      <img src={appleMusicIcon} alt="Apple Music logo" style={{ height: 20, width: 83 }} />
    ),
    label: "Listen on",
  },
  {
    name: "Amazon Music",
    url: "https://music.amazon.com/artists/B089WD7HYM/essence-of-fantasy",
    icon: (
      <img src={amazonMusicIcon} alt="Amazon Music logo" style={{ height: 32 }} />
    ),
    label: "Listen on",
  },
  {
    name: "YouTube Music",
    url: "https://music.youtube.com/channel/UCQBhzJlSQbb-miSdX6KVrNA",
    icon: (
      <img src={youtubeIcon} alt="YouTube Music logo" style={{ height: 20, width: 93 }} />
    ),
    label: "Listen on",
  },
];

export function PlatformLinks() {
  return (
    <section className="platforms" id="links">
      <div className="inner">
        <p className="eyebrow">Find Me On</p>
        <h2 className="title platforms__title">Listen &amp; Support</h2>
        <div className="platforms__grid">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platforms__card"
            >
              <div className="platforms__icon">
                {p.icon}
              </div>
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

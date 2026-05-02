import './SongWriting.css';

const songs = [
  { id: '5jN-6Srj1xc' },
  { id: 'Qb4wyzLbMsk' },
  { id: 'KUl3W889ICY' },
  { id: 'WStseqhPpb4' },
  { id: 'k6jT_QgnS6U' },
];

export function SongWriting() {
  return (
    <section className="songwriting" id="songwriting">
      <div className="songwriting__inner">
        <div className="songwriting__header">
          <p className="songwriting__eyebrow">Original Music</p>
          <h2 className="songwriting__title">Song Writing</h2>
          <p className="songwriting__desc">
            Original compositions that weave storytelling with ethereal soundscapes.
          </p>
        </div>
        <div className="songwriting__grid">
          {songs.map((song, i) => (
            <div key={song.id} className="songwriting__video">
              <iframe
                src={`https://www.youtube.com/embed/${song.id}`}
                title={`Song ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

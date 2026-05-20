import "./SessionSinger.css";

const videos = [
  { id: "HkQj1_sPUCU" },
  { id: "hHO7EkZJPQs" },
  { id: "7dQhL_n_DWI" },
];

export function SessionSinger() {
  return (
    <section className="session" id="session-singer">
      <div className="inner">
        <div className="session__header">
          <p className="session__eyebrow">Vocal Work</p>
          <h2 className="session__title">Session Singer</h2>
        </div>
        <div className="session__grid">
          {videos.map((video, i) => (
            <div key={video.id} className="session__video">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={`Session ${i + 1}`}
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

import React from "react";

function PhotoImage({ url, photo }) {
  return (
    <a
      className="app__photo-grid-img-link"
      href={`${url}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="overlay app__photo-grid-img--overlay">
        <p className="app__photo-grid-img--overlay-title">{photo.title}</p>
      </div>
      <img
        className="app__photo-grid-img"
        src={`${url}`}
        alt={`${photo.title}`}
      />
    </a>
  );
}

export default PhotoImage;

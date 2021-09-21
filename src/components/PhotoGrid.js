import PhotoImage from "./PhotoImage";
import React, { useEffect, useContext } from "react";
import { PhotoGridContext } from "./PhotoGridContext";

function PhotoGrid({ tag }) {
  const { photos, searchImage } = useContext(PhotoGridContext);

  useEffect(() => {
    try {
      searchImage(tag);
    } catch (err) {
      console.log(err);
    }
  }, [tag]);

  return (
    <div className="app__photo-grid">
      {photos.map((photo) => {
        const url = `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        return <PhotoImage key={photo.id} url={url} photo={photo} />;
      })}
    </div>
  );
}

export default PhotoGrid;

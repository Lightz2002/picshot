import React, { useState, createContext } from "react";
import { API_KEY } from "../config";

export const PhotoGridContext = createContext();

function PhotoGridProvider(props) {
  const [photos, setPhotos] = useState([]);

  const searchImage = async function (query) {
    try {
      if (!query) return;

      const res = await fetch(
        // eslint-disable-next-line
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&format=json&nojsoncallback=1`
      );
      if (!res.ok) {
        throw new Error("Unable To Process Your Search, Try Again Later");
      }
      const data = await res.json();
      setPhotos(data.photos.photo.slice(0, 12));
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PhotoGridContext.Provider value={{ photos, searchImage }}>
      {props.children}
    </PhotoGridContext.Provider>
  );
}

export default PhotoGridProvider;

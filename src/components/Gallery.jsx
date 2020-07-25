import React from "react";
import "./styles/main.css";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__vertical">
        <img src="" alt="" className="gallery__photo--ver" />
        <img src="" alt="" className="gallery__photo--ver" />
      </div>
      <div className="gallery__horizontal">
        <img src="" alt="" className="gallery__photo--hor" />
        <img src="" alt="" className="gallery__photo--hor" />
      </div>
    </div>
  );
}

export default Gallery;

import React from "react";
import "./styles/main.css";

function Gallery() {
  let curator = () => {
    var i,
      e,
      d = document,
      s = "script";
    i = d.createElement("script");
    i.async = 1;
    i.src =
      "https://cdn.curator.io/published/112ba354-06e7-44ca-b441-d6d500db5625.js";
    e = d.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(i, e);
  };
  return (
    <div className="gallery">
      {/* <h2>Galería Component</h2> */}
      <div className="gallery__vertical">
        <img src="" alt="" className="gallery__photo--ver" />
        <img src="" alt="" className="gallery__photo--ver" />
      </div>
      <div className="gallery__horizontal">
        <img src="" alt="" className="gallery__photo--hor" />
        <img src="" alt="" className="gallery__photo--hor" />
      </div>
      <div id="curator-feed-default-feed-layout">
        {curator()}
        <a
          href="https://curator.io"
          target="_blank"
          className="crt-logo crt-tag"
        >
          Powered by Curator.io
        </a>
      </div>
    </div>
  );
}

export default Gallery;

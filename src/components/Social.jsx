import React from "react";
import "./styles/main.css";

function Social() {
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
    <div className="social">
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
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div className="elfsight-app-9775b0c8-674c-448e-b215-bee02b3be091"></div>
    </div>
  );
}

export default Social;

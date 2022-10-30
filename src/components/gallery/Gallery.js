import React from "react";
import Grid from "./Grid";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__description">
        <h1>Sample Client Gallerie</h1>
        <p>
          If you’re a visual person like me and would like to see some sample
          galleries of my previous clients before you make any decisions
          regarding your photoshoot, feel free to browse them below. This is a
          mix of in-home and outdoor family, maternity, newborn and cake smash
          sessions.
        </p>
      </div>
      <Grid />
    </div>
  );
};

export default Gallery;

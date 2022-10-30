import React from "react";
import { data } from "../../store/data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Grid = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {data &&
          data.map((img) => {
            return (
              <img
                key={img.id}
                src={img.img}
                style={{
                  width: "100%",
                  display: "block",
                  cursor: "pointer",
                  padding: "20px",
                }}
              />
            );
          })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Grid;

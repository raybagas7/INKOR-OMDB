import React from "react";

const NotFoundMovies = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      <p style={{ fontSize: "36px", fontWeight: "bold" }}>404 </p>
      <p>Movies Not Found</p>
    </div>
  );
};

export default NotFoundMovies;

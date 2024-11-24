import React, { useState } from "react";
import { movies } from "./data";

const Movies = () => {
  const [moviesList, setMoviesList] = useState(movies);

  const filterCat = (c) => {
    setMoviesList(movies.filter((data) => data.category === c));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "15px",
        }}
      >
        <button
          type="button"
          onClick={() => setMoviesList(movies)}
          className="btn btn-outline-primary"
        >
          All
        </button>
        <button
          onClick={() => filterCat("Action")}
          type="button"
          className="btn btn-outline-secondary"
        >
          Action
        </button>
        <button
          onClick={() => filterCat("Thriller")}
          type="button"
          className="btn btn-outline-success"
        >
          Thriller
        </button>
        <button
          onClick={() => filterCat("Animation")}
          type="button"
          className="btn btn-outline-danger"
        >
          Animation
        </button>
        <button
          onClick={() => filterCat("Horror")}
          type="button"
          className="btn btn-outline-warning"
        >
          Horror
        </button>
        <button
          onClick={() => filterCat("Drama")}
          type="button"
          className="btn btn-outline-info"
        >
          Drama
        </button>
        <button
          onClick={() => filterCat("Sci-Fi")}
          type="button"
          className="btn btn-outline-light"
        >
          Sci-Fi
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          textAlign: "center",
          width: "1200px",
          margin: "auto",
          color: "white",
          marginTop: "2rem",
        }}
      >
        {moviesList.map((data) => (
          <div key={data.id} style={{ maxWidth: "250px" }}>
            <div style={{ padding: "10px" }} className="hover-effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  border: "1px solid yellow",
                  borderRadius: "12px",
                }}
              />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;

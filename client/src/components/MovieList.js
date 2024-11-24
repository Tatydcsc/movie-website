import React from "react";

export const MovieList = ({ filmes }) => {
  return (
    <div>
      <h2>Filmes em destaque </h2>

      <div style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
        {filmes.map((filme) => (
          <div key={filme.id} style={{ width: "150px" }}>
            <img
              src={filme.image}
              alt={filme.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>{filme.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

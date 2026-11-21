import { useEffect, useState } from "react";
import { get } from "../services/httpClient";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

const GENRE_LIMIT = 8;

function LandingPage() {
  const [featured, setFeatured] = useState(null);
  const [genreRows, setGenreRows] = useState([]);

  useEffect(() => {
    get("/movie/popular")
      .then((data) => setFeatured(data.results[0]))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    get("/genre/movie/list")
      .then((data) => {
        const genres = data.genres.slice(0, GENRE_LIMIT);

        return Promise.all(
          genres.map((genre) =>
            get(`/discover/movie?with_genres=${genre.id}`).then((data) => ({
              id: genre.id,
              name: genre.name,
              movies: data.results,
            })),
          ),
        );
      })
      .then((rows) => setGenreRows(rows.filter((row) => row.movies.length > 0)))
      .catch((error) => console.error(error));
  }, []);

  if (!featured && genreRows.length === 0) {
    return <p className="loading">Cargando películas...</p>;
  }

  return (
    <div>
      <Hero movie={featured} />
      {genreRows.map((row) => (
        <MovieRow key={row.id} title={row.name} movies={row.movies} />
      ))}
    </div>
  );
}

export default LandingPage;

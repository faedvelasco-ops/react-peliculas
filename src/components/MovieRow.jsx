import MovieGrid from "./MovieGrid";
import "./MovieRow.css";

function MovieRow({ title, movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <section className="movie-row">
      <h3 className="movie-row-title">{title}</h3>
      <MovieGrid movies={movies} />
    </section>
  );
}

export default MovieRow;

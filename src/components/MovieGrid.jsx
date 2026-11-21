import MovieCard from "./MovieCard";
import "./MovieGrid.css";

function MovieGrid({ movies }) {
  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      ))}
    </ul>
  );
}

export default MovieGrid;

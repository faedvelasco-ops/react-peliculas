import { getMovieImg } from "../utils/getMovieImg";
import "./Hero.css";

function Hero({ movie }) {
  if (!movie) return null;

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : getMovieImg(movie.poster_path, 1280);

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <div className="hero-overlay">
        <h2 className="hero-title">{movie.title}</h2>
        <p className="hero-overview">{movie.overview}</p>
      </div>
    </section>
  );
}

export default Hero;

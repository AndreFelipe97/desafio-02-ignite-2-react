import { MovieProps } from '../interfaces/MovieProps';

import { MovieCard } from '../components/MovieCard';

interface ContentProps {
  movies: MovieProps[]
}

export function Content(props: ContentProps) {
  return (
    <main>
      <div className="movies-list">
        {props.movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  );
}
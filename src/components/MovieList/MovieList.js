import React from 'react';
import styles from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = (props) => {
    return (
        <div className={styles.CardList}>
            {props.movies && props.movies.map(movie => {
                return <MovieCard 
                    key={movie.id} 
                    poster_path={movie.poster_path}
                    description={movie.overview}
                    rating={movie.vote_average}
                    title={movie.original_title} />
            })}
        </div>
    );
};

export default MovieList;
import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = (props) => {
    return (
        <div className={styles.Card}>
            <img className={styles.CardImage} src={props.poster_path ? `https://image.tmdb.org/t/p/w500/${props.poster_path}` : "unavailable"} alt="movie poster" />
            <div className={styles.CardContent}>
                <h4 className={styles.CardTitle}>{props.title}</h4>
                <span className={styles.CardRating}>{props.rating}</span>
            </div>
            <div className={styles.CardDescription}>
                <h4>Overview</h4>
                <h3>{props.description.length < 450 ? props.description : `${props.description.slice(0,450)}...`}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
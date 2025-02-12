import React from "react";
import PropTypes from "prop-types";
import './Movie.css';
import { Link } from 'react-router-dom'

function Movie({ year, title, genres, summary, poster }) {
    return (
        <div className="movie">
            <Link 
            to={"/movie_detail"}
            state={{year, title, summary, poster, genres}}
            >
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__ganres">
                    {genres.map((ganre, index) => {
                        return <li key={index} className="movie__genre">{ganre}</li>;
                    })}
                </ul>
                <p className="movie__sumary">{summary.slice(0, 180)}...</p>
            </div>
        </Link>
    </div>
        
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;
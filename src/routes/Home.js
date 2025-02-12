import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const {
      data: {
        data: { movies },
      },
    } 
    = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState( { movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
    console.log('로딩 끝!');
  }

  render () {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {
          isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {
                movies.map((movie) => (
                  // console.log(movie);
                    <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    genres={movie.genres}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    />
                  ))}
            </div>
          ) }
      </section>
    );
  }
}

export default Home;


// https://yts-proxy.now.sh/list_movies.json
// https://yts-proxy.now.sh/movie_details.json
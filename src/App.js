import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';

import { movieUrl, searchUrl } from './Services/api-config';

function App() {

  const [movies, setMovies] = useState();
  let timer = 0;

  const getAllMovies = () => {
    fetch(movieUrl)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const refreshPageHandler = () => {
    getAllMovies();
  };

  const searchHandler = (event) => {

    if (timer) clearTimeout(timer);

    if (event.target.value) {
      timer = setTimeout(() => {
        fetch(searchUrl + event.target.value)
          .then(response => response.json())
          .then(data => setMovies(data.results));
      }, 300);
    }
  }

  return (
    <div className="App">
      <Header searchHandler={searchHandler} refreshPageHandler={refreshPageHandler} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

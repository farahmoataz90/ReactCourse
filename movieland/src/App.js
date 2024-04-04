//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';


//key : 536461dd

const API_URL = 'http://www.omdbapi.com?apikey=536461dd';

const movie1 = {
  "Title": "Spiderman in Cannes",
  "Year": "2016",
  "imdbID": "tt5978586",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}

//function component
const App = ()=>{

  const [movies,setMovies] = useState([]); //default values of our movies is empty array
  const [searchTerm , setSearchTerm] = useState('');

  //async takes some time to search in that movie
    const searchMovies = async(title)=>{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

     // console.log(data.Search);

     setMovies(data.Search);

    }

  useEffect(()=>{
    searchMovies('Spiderman');
    


  },[]) // empty dependency array


  return(
    <div className='app'>
      <h1>MovieLand</h1>

      {/* start of the search div */}
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>
      {/* end of the search div */}


      {
        movies?.length > 0
        ?
        (
        <div className='container'>
           {/* <MovieCard movie1={movies[0]}/> */}
           {movies.map((movie)=>(
              <MovieCard movie={movie} />
           ))}
        </div>
        ):(
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )

      }

      

    </div>
  );


}

export default App;
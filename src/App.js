import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';


// f9b302b0
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f9b302b0';

const movie1={
	"Title": "Batman v Superman: Dawn of Justice",
	"Year": "2016",
	"imdbID": "tt2975590",
	"Type": "movie",
	"Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


const App = () => {

	const [movies, setmovies] = useState([]);
	const [searchTerm, setsearchTerm] = useState("");

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		// data.Search.length > 0 ? setmovies(data.Search) : setmovies([])
		if (data==='undefined') {
			console.log("chud gae")
			
		}
		else{
			setmovies(data.Search)
			console.log("fuck yeah")
		}
		console.log(movies)
	}

	useEffect(() => {
		searchMovies({searchTerm})
	}, []); 



	return (
		<div className="app">
			<h1>My Movie List </h1>

			<div className="search">
				<input
					placeholder="Search For Movies"
					value={searchTerm}
					onChange={(e) => setsearchTerm(e.target.value)}
				/>

				<img
					src={SearchIcon}
					alt="Search"
					onClick={() => searchMovies(searchTerm)}

				/>
			</div>	
				{
					movies.length >0  ?
					( 
						<div className="container"> 							
							{movies.map((movie)=>(
								<MovieCard movie={movie}/>
							))}
						</div>
					)
					:
					(
						<div className="empty">
							<h2>No Movies found</h2>
						</div>
					)
				}
				

		</div>


	);
}

export default App;
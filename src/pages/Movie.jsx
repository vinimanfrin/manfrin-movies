import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const {id} = useParams()
    const [movie,setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json()

        setMovie(data);
    }

    useEffect(()=> {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl);
    },[])

    return (
        <div className="container">
            {movie && 
                <div className="movie">
                    
                    <div>
                        <MovieCard movie={movie} showLink={false}/>
                    </div>

                    <div>
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{movie.runtime} minutos</p>
                    </div>

                    <div>
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{movie.overview} minutos</p>
                    </div>
                </div> 
            }
        </div>
    )
}

export default Movie
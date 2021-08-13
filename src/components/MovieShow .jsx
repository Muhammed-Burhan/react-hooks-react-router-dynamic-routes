import React from 'react'
import { useParams } from "react-router-dom"
function MovieShow({ movies }) {
    const param = useParams();

    return (
        <div>
            <h3>Movies Show Component!</h3>
            {movies[param.movieId].title}
        </div>
    )
}

export default MovieShow

import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../features/movies/movieSlice';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    //console.log(movies);
    let renderMovies = "";

    renderMovies = movies.page?(

        movies.results.map((movie) => {
            return <MovieCard key={movie.id} data={movie} />
        })
    ):(
        <div>
            Error
        </div>
    );

    const CardContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 3rem;
    `;

    
    return (
        <>
            <CardContainer>
                {renderMovies}
            </CardContainer>
        </>
    );
};

export default MovieListing;
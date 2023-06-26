import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieDetail, getSelectedMovie } from '../features/movies/movieSlice';
import {IMG_SRC_BASE} from "../common/imgURL";
import styled from 'styled-components';
import { StarFill} from "@styled-icons/bootstrap";

const MovieDetail = () => {
    const { movie_id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovie);
    const imgSrcUrl = `${IMG_SRC_BASE}/${data.poster_path}`;

    //console.log(data);

    useEffect(() => {
        dispatch(fetchAsyncMovieDetail(movie_id));
        //console.log(movie_id);
    },[dispatch, movie_id]);


    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Helvetica;
    `;

    const Image = styled.img`
        padding-left: 40px;
        padding-right: 20px;
        padding-top: 40px;
        width: 30rem;
    `;

    const GenreItem = styled.span`
        padding: 10px;
        margin: 5px;
        background-color: #85cbb0;
        font-weight: 600;
    `;

    const Star = styled(StarFill)`
        color: #f5c518;
        width: 20px;
    `;

    const Rating = styled.div`
        display: flex;
        justify-content: start;
        align-items: center;
        font-family: Helvetica;
    `;

    const CompanyImg = styled.img`
        max-width: 4rem;
        max-height: 4rem;
        width:auto;
        height:auto;
        padding-right: 0.5rem;
    `;

    const CompanyLogo = styled.div`
        display: flex;
        align-items: center;
        width: 5rem;

    `;
    return (
        <Container>
            <div className="img">
                <Image src={imgSrcUrl} alt={data.title} />
            </div>
        
            <div className="info">
                
                <h1>{data.title}</h1>
                <h2>Release Date</h2>
                <p className="date">
                    {data.release_date}
                </p>
                <h2>Overview</h2>
                <p className="overview">
                    {data.overview}
                </p>

                <h2>Genres</h2>
                <div>
                    {data && data.genres && data.genres.map((genre) => {
                        return (<GenreItem key={genre.name}>{genre.name}</GenreItem>);
                    })}
                </div>

                <h2>Rating</h2>
                <Rating><Star></Star><span>{data.vote_average}</span></Rating>

                <h2>Production companies</h2>
                <div>
                    <CompanyLogo>
                    {data && data.genres && data.production_companies.map((company) => {
                        return company.logo_path ? <CompanyImg src={IMG_SRC_BASE + company.logo_path} key={company.name}/> : null;
                    })}
                    </CompanyLogo>
                </div>
            
            </div>
        </Container>
    );
};

export default MovieDetail;

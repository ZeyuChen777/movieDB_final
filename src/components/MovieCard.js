import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IMG_SRC_BASE = `https://image.tmdb.org/t/p/w500`;

const MovieCard = (props) => {
    const {data} = props;
    //console.log(data);

    // const imgSrcUrl = data.poster_path? `${IMG_SRC_BASE}${data.poster_path}` : null;
    const imgSrcUrl = `${IMG_SRC_BASE}${data.poster_path}`;

    const MovieCard = styled.div`
      text-align: center;
      box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);

      &:hover{
        transform: scale(1.05);
        transition: all 0.3s;
      }
    `;

    const ImageContainer = styled.div`
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    `;

    const Title = styled.h4`
      font-size: 1.5rvm;
      font-family: Arial;
      font-weight: 550;
      margin: 1rvm 0;
      cursor: pointer;

      &:hover {
        color: #90cea1;
      }
    `;

    const Rating = styled.div`
      display: flex;
      justify-content: space-even;
      padding: 0 1rem;
      align-items: bottom;
    `;

    const Icon = styled.div`
      font-size: 1.5rem;

      &.ion-md-heart-empty {
        cursor: pointer;
      }

      &.ion-md-heart {
        cursor: pointer;
        color: red;
      }

      &.rating-icon {
        color: #f5c518;
        margin-right: 0.5rem;
        cursor: default;
      }
    `;

    const StyledLink = styled(Link)`
        text-decoration: none;
        color: inherit;
    `;
    return (
        <>
            <MovieCard>
                <StyledLink to={`/movie/${data.id}`}>
                  <ImageContainer>
                    <img src={imgSrcUrl} alt={data.title}/>
                  </ImageContainer>
                    <Title>{data.title}</Title>
                </StyledLink>
                <Rating>
                  <Icon className="rating-icon">...</Icon>
                </Rating>
                
            </MovieCard>
        </>
    );
};

export default MovieCard;
import React, { useEffect } from 'react';
import MovieListing from './MovieListing';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies } from '../features/movies/movieSlice';
import Pagination from './Pagination';

// import MovieDetail from './MovieDetail';

const Home = () => {
    // const [movieList, setMovieList] = useState();
    // const [totalPages, setTotalPages] = useState();

    const dispatch = useDispatch();
    const page = useSelector((state) => state.movies.page);
    const category = useSelector((state) => state.movies.category);

    useEffect(() => {
        dispatch(fetchAsyncMovies({page:page, category:category}));
      }, [dispatch, page, category]);

    return (
        <div className='Home'>
            {/* {totalPages} */}
            <Pagination/>
            <MovieListing />
        </div>
    );
};

export default Home;
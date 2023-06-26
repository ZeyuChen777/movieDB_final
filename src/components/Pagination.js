
import React  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { prevPage, nextPage, setCategory} from '../features/movies/movieSlice';

const Pagination = () => {

  const dispatch = useDispatch();
  const page = useSelector((state) => state.movies.page);
  const totalPage = useSelector((state) => state.movies.totalPage);
  const category = useSelector((state) => state.movies.category);
  // const movies = useSelector(getAllMovies);

  // useEffect(() => {
  //   dispatch(fetchAsyncMovies({page: page, category: category}));
  // }, [dispatch, page, category]);

  const handlePrevPage = () => {
    dispatch(prevPage());
    //dispatch(fetchAsyncMovies({page: page -1, category: category}));
  };

  const handleNextPage = () => {
    dispatch(nextPage());
    //dispatch(fetchAsyncMovies({page: page + 1, category: category}));
  };

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
    //dispatch(fetchAsyncMovies({page: page, category: category}));
  };

  const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-family: Helvetica;
  `;

  const Pagination = styled.p`
      padding: 0px 20px;
  `;

  const Select = styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      font-family: Helvetica;
      padding:0 0 10px 0;
  `;
  return (
    <div>
    <Container>
      <button onClick={handlePrevPage} disabled={page === 1}>
        prev
      </button>
      <Pagination> {page}/ {totalPage}</Pagination>
      <button onClick={handleNextPage}>
        next
      </button>
    </Container>
    <Select>
      <select value={category} onChange={handleCategoryChange}>
        <option value="now_playing">Now Playing</option>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
    </select>
    </Select>
    </div>
  );
}

export default Pagination;
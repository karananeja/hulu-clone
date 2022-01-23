import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import instance from '../axios';
import '../css/Results.css';
import VideoCard from './VideoCard';

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(selectedOption);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [selectedOption]);

  return (
    <div className='results'>
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard movie={movie} key={movie.id} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;

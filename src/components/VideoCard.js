import { ThumbUpSharp } from '@mui/icons-material';
import React, { forwardRef } from 'react';
import TextTruncate from 'react-text-truncate';
import '../css/VideoCard.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div className='videoCard' ref={ref}>
      <img
        className='videoCard__img'
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.original_name}
      />
      <TextTruncate
        line={1}
        element='p'
        truncateText='...'
        text={movie.overview}
      />
      {/* <p>{movie.relase_date || movie.first_air_date}</p> */}
      <h2>{movie.title || movie.original_name}</h2>
      <p className='videoCard__stats'>
        {movie.media_type && `${movie.media_type} •  `}
        {movie.release_date || movie.first_air_date} • <ThumbUpSharp />{' '}
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;

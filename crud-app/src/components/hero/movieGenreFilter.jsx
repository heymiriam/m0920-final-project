import React from 'react';
import './hero.scss';
import { GENREFILTER } from '../../genreFilter';

const MovieGenreFilter = ({ query, handleQueryChange }) => {
  return (
    <div >
      <div >
        <select
          name="genreTypeFilter"
          value={query}
          onChange={handleQueryChange}
        >
          <option value="">Select Movie Genre</option>
          {GENREFILTER.map((genreType) => (
            <option key={genreType.value} value={genreType.title}>
              {genreType.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MovieGenreFilter;
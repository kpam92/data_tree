import React from 'react';

 const Result = ({ data,handleSearchClick }) => (
  <h5 onClick={handleSearchClick}>{data.path}</h5>
);

export default Result;

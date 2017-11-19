import React from 'react';
import PropTypes from 'prop-types';
import { video as videoPropTypes } from '../propTypes';

function ResultCounter({ videos }) {
  return (
    <div>
      <strong>Found { videos.length } videos.</strong>
      <br /><br />
    </div>
  )
}

ResultCounter.propTypes = {
  videos: PropTypes.arrayOf(videoPropTypes),
};

export default ResultCounter;

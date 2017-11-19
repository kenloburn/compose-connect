import React from 'react';
import { video as videoPropTypes, channel as channelPropTypes } from '../propTypes';

const styles = {
  wrapper: {
    float: 'left',
    width: '250px',
    marginRight: '10px',
  },

  thumbnail: {
    width: '100%',
    marginBottom: '3px',
  }
};

function Video({ video, channel }) {
  return (
    <div style={styles.wrapper}>
      <img style={styles.thumbnail} src={video.thumbnail} alt="" />
      <strong>{video.title}</strong><br />
      <em>Channel: {channel.title}</em>
    </div>
  );
}

Video.propTypes = {
  video: videoPropTypes,
  channel: channelPropTypes,
};

export default Video;

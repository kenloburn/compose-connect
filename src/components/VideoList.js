import React from 'react';
import PropTypes from 'prop-types';
import { video as videoPropTypes, channel as channelPropTypes } from '../propTypes';
import Video from './Video';

function VideoList({ videos, channels }) {
  return videos.map(v => <Video video={v} channel={channels[v.channel_id]} />);
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(videoPropTypes),
  channels: PropTypes.objectOf(channelPropTypes),
};

export default VideoList;
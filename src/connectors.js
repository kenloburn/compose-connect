import { connect } from 'react-redux';

export function videosConnector(c) {
  return connect(
    state => ({ videos: state.videos }),
  )(c);
}

export function channelsConnector(c) {
  return connect(
    state => ({ channels: state.channels }),
  )(c);
}


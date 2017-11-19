import * as R from 'ramda';
import { connect } from 'react-redux';

export const videosConnector = R.compose(
  connect(state => ({ videos: state.videos }))
);

export const channelsConnector = R.compose(
  connect(state => ({ channels: state.channels }))
);

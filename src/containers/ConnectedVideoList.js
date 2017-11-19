import * as R from 'ramda';
import VideoList from '../components/VideoList';
import {
  videosConnector as withVideos,
  channelsConnector as withChannels,
} from '../connectors';

export default R.compose(
  withVideos,
  withChannels,
)(VideoList);
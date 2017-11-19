import * as R from 'ramda';
import ResultCounter from '../components/ResultCounter';
import {
  videosConnector as withVideos,
} from '../connectors';

export default R.compose(
  withVideos,
)(ResultCounter);
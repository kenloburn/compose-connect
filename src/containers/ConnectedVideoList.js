import VideoList from '../components/VideoList';
import { videosConnector, channelsConnector } from '../connectors';

export default channelsConnector(videosConnector(VideoList));
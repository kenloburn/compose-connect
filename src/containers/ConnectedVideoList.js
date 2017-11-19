import { connect } from 'react-redux';
import VideoList from '../components/VideoList';

const mapStateToProps = state => ({
  videos: state.videos,
  channels: state.channels,
});

export default connect(
  mapStateToProps,
)(VideoList);
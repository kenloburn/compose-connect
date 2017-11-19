import { connect } from 'react-redux';
import ResultCounter from '../components/ResultCounter';

const mapStateToProps = state => ({
  videos: state.videos,
});

export default connect(
  mapStateToProps,
)(ResultCounter);
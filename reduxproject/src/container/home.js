import Home from '../components/Home';
import {increase,decrease} from '../actions/home';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(
  mapStateToProps,
  {increase,decrease}
)(Home);

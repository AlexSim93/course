import { connect } from 'react-redux';
import App from '../../components/App/index';
import { increase, decrease } from '../../actions/index';

const mapStateToProps = (state) => ({
    firstNumber: state['firstNumber'],
    secondNumber: state['secondNumber']
  });
  
  const mapStateToDispatch = (dispatch) => ({
    onIncrement: (number) => dispatch(increase(number)),
    onDecrement: (number) => dispatch(decrease(number))
  });
  
  
  export default connect(mapStateToProps, mapStateToDispatch)(App);
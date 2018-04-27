import { connect } from 'react-redux';
import App from '../../components/App/index';
import { increase, decrease, FIRST_NUMBER, SECOND_NUMBER } from '../../actions/index';

const mapStateToProps = (state) => ({
    firstNumber: state[FIRST_NUMBER],
    secondNumber: state[SECOND_NUMBER]
  });
  
  const mapStateToDispatch = (dispatch) => ({
    onIncrement: (number) => dispatch(increase(number)),
    onDecrement: (number) => dispatch(decrease(number))
  });
  
  
  export default connect(mapStateToProps, mapStateToDispatch)(App);
import { connect } from 'react-redux';
import { moviesAreLoading } from '../../actions/index';
import Form from '../../components/Form/index';

const mapStateToDispatch = (dispatch: any) => ({
    fetchData: (url: string) => dispatch(moviesAreLoading(url)),
});

export default connect(null, mapStateToDispatch)(Form);
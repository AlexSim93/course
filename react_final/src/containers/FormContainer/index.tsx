import { connect } from 'react-redux';
import Form from '../../components/Form';
import {setSearchType, SearchTypes} from '../../actions';

const mapStateToProps = (state: any) => ({
    searchType: state.searchType
});

const mapStateToDispatch = (dispatch: any) => ({
    setSearchByTitle: (type: string) => dispatch(setSearchType(SearchTypes.TITLE)),
    setSearchByTagline: (type: string) => dispatch(setSearchType(SearchTypes.TAGLINE))
});

export default connect(mapStateToProps, mapStateToDispatch)(Form);

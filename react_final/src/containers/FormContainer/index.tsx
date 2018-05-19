import { connect } from 'react-redux';
import Form from '../../components/Form';
import {setSearchType, SearchTypes, moviesAreLoading} from '../../actions';

const mapStateToProps = (state: any, ownProps: any) => ({
    searchType: state.searchType,
    searchValue: ownProps.match.params.searchValue
});
const mapStateToDispatch = (dispatch: any) => ({
    setSearchByTitle: (type: string) => dispatch(setSearchType(SearchTypes.TITLE)),
    setSearchByTagline: (type: string) => dispatch(setSearchType(SearchTypes.TAGLINE)),
    fetchMovies: (url: string) => dispatch(moviesAreLoading(url))
});

export default connect(mapStateToProps, mapStateToDispatch)(Form);

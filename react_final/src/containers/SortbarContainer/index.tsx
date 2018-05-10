import { connect } from 'react-redux';
import Sortbar from '../../components/Sortbar';
import {sortMovies, SortTypes} from '../../actions/index';

const mapStateToProps = (state: any) => ({
    result: state.entities.movies.length,
});

const mapDispatchToProps = (dispatch: any) => ({
    onSortByDate: () => dispatch(sortMovies(SortTypes.RELEASE_DATE)),
    onSortByRating: () => dispatch(sortMovies(SortTypes.RATING))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sortbar);
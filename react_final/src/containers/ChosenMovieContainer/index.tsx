import { connect } from 'react-redux';
import ChosenMovie from '../../components/ChosenMovie/index';
import {filmAreLoading} from '../../actions/index';

const mapStateToProps = (state: any, ownProps: any) => ({
    film: state.chosenFilm.film,
    url: `http://localhost:3000/movies?title=${ownProps.match.params.film}&_limit=1`
});

const mapStateToDispatch = (dispatch: any) => ({
    fetchFilm: (url: string) => dispatch(filmAreLoading(url)),
});

export default connect(mapStateToProps, mapStateToDispatch)(ChosenMovie);
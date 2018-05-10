import { connect } from 'react-redux';
import ChosenMovie from '../../components/ChosenMovie/index';
import {filmAreLoading} from '../../actions/index';

const mapStateToProps = (state: any) => ({
    film: state.chosenFilm.film,
    url: 'http://localhost:3000/movies?id=962'
});

const mapStateToDispatch = (dispatch: any) => ({
    fetchFilm: (url: string) => dispatch(filmAreLoading(url)),
});

export default connect(mapStateToProps, mapStateToDispatch)(ChosenMovie);
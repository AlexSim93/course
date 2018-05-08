import { connect } from "react-redux";
import { fetchData } from "../../actions/index";
import App from "../../components/App";

const mapStateToProps = (state: any) => ({
    movies: state.movies,
});

const mapStateToDispatch = (dispatch: any) => ({
    fetchData: (url: any) => dispatch(fetchData(url)),
});

export default connect(mapStateToProps, mapStateToDispatch)(App);

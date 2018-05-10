import { connect } from 'react-redux';
import Sortbar from '../../components/Sortbar';

const mapStateToProps = (state: any) => ({
    result: state.entities.movies.length,
});

export default connect(mapStateToProps)(Sortbar);
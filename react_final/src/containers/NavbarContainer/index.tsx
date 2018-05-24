import { connect } from "react-redux";
import Navbar from "../../components/Navbar";

const mapStateToProps = (state: any, ownProps: any) => ({
  favourites: state.favourites
});

export default connect(mapStateToProps)(Navbar);

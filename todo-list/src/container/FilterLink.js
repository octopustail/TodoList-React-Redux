import {connect} from "react-redux"
import {setVisibilityFilter} from "../actions";
import Link from '../components/Links.react'

const mapStateToProp = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProp,
    mapDispatchToProps
)(Link)
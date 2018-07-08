import { connect } from 'react-redux'
import { loadCars } from '../actions'

import SimpleCarTableRedux from '../components/SimpleCarTableRedux'

const mapStateToProps = (state, ownProps) => {
    return {
        cars: state.carReductor.cars,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onMount: () => {
            loadCars(dispatch);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SimpleCarTableRedux)


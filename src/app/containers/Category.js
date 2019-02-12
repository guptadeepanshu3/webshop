// Deepanshu
import { connect } from 'react-redux';

import Category from '../components/pages/Category';
import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    console.log(state, 'mapStateToProps');

    return {
        categoryProducts: state.categoryReducer.categoryProducts,
        loaded: state.productReducer.loaded,
        cartItems: state.cartReducer.cartItems,
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return { dispatchers: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(Category);
// Deepanshu
import { connect } from 'react-redux';

import Product from '../components/pages/Product';
import * as actions from '../state/actions';
import {bindActionCreators} from 'redux'

const mapStateToProps = (state) => {
    console.log(state, 'mapStateToProps');

    return {
        Product: state.productReducer.Product,
        cartItems: state.cartReducer.cartItems
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return { dispatchers: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(Product);
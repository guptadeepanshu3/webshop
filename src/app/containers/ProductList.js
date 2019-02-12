// Deepanshu
import { connect } from 'react-redux';

import ProductList from '../components/pages/ProductList';
import * as actions from '../state/actions';
import {bindActionCreators} from 'redux'

const mapStateToProps = (state) => {
    console.log(state, 'mapStateToProps');

    return {
        allProducts: state.productReducer.allProducts,
        loaded: state.productReducer.loaded,
        cartItems: state.cartReducer.cartItems,
        filteredProducts: state.productReducer.filteredProducts
    }
}


const mapDispatchToProps = (dispatch, getState) => {
    return { dispatchers: bindActionCreators(actions, dispatch) }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(ProductList);
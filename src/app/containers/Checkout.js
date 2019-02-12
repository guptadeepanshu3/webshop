// Sowmiya
import { connect } from 'react-redux';

import Checkout from '../components/pages/Checkout';
import * as actions from '../state/actions';

const mapStateToProps = (state) => {
    console.log(state, 'mapStateToProps');

    return {
        cartItems: state.cartReducer.cartItems,

    }
}


export default connect(mapStateToProps,
)(Checkout);
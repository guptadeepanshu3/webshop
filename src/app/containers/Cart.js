// Sowmiya
import { connect } from 'react-redux';
import Cart from '../components/pages/Cart';
import * as actions from '../state/actions';
import { bindActionCreators } from 'redux'
const mapStateToProps = (state) => {
    console.log(state, 'mapStateToProps');

    return {
        cartItems: state.cartReducer.cartItems,
    }
}


const mapDispatchToProps = (dispatch, getState) => {
    return { dispatchers: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(Cart);
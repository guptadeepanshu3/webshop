// Deepanshu
import {connect} from 'react-redux';

import TopProducts from '../components/home/TopProducts';
import * as actions from '../state/actions';
import {bindActionCreators} from 'redux'
 
const mapStateToProps = (state) => {
    console.log(state,'mapStateToProps');
    
    return {
        topProducts: state.productReducer.topProducts,
        cartItems: state.cartReducer.cartItems,

    }
}
 
const mapDispatchToProps = (dispatch, getState) => {
    return { dispatchers: bindActionCreators(actions, dispatch) }
}
export default connect(mapStateToProps, 
                        mapDispatchToProps) (TopProducts);
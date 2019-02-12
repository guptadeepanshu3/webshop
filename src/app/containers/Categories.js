// Deepanshu
import { connect } from 'react-redux';
import Categories from '../components/pages/Categories';
import * as actions from '../state/actions';
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
    return {
        Categories: state.categoryReducer.Categories,
    }
}


const mapDispatchToProps = (dispatch, getState) => {
    return { dispatchers: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(Categories);
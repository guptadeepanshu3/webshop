import React, { Component } from "react";
import { Row, Container, Col } from 'reactstrap';
import Home from './app/components/pages/Home';
import Error from './app/components/pages/404';
import Checkout from './app/containers/Checkout';
import Login from './app/components/pages/Login'
// import Categories from './app/containers/Categories';
import Category from './app/containers/Category'
import ProductList from './app/containers/ProductList';
import Cart from './app/containers/Cart';
import Product from './app/containers/Product';
import Layout from './app/components/common/Layout'
import OrderConfirmation from './app/components/pages/OrderConfirmation'
import AuthRoute from './app/components/common/AuthRoute'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

const Loading = () => (
  <div>
    <h2>Loading Module..</h2>
  </div>
);
const LazyLoadableCategories = Loadable({
  // webpack, look into this, create separate bundle for cart code (Cart, CartList, Sumary, ITem), chunk...
  loader: () => import('./app/containers/Categories'),
  loading: Loading,
});
class App extends Component {
  render() {

    return (
      <Container>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/categories" component={LazyLoadableCategories} />
              <Route path="/categories/:name" component={Category} />
              <Route exact path="/products" component={ProductList} />
              {/* <Route exact path="/cart" component={Cart} /> */}
              <AuthRoute path='/cart' authenticated={this.props.isAuthenticatedUser} component={Cart}></AuthRoute>
              {/* <Route exact path="/checkout" component={Checkout} /> */}
              <AuthRoute path='/checkout' authenticated={this.props.isAuthenticatedUser} component={Checkout}></AuthRoute>
              <Route exact path="/login" component={Login} />
              <Route path="/products/:id" component={Product} />
              <Route path='/orderconfirmation/:id' component={OrderConfirmation} />
              <Route path='*' component={Error} />
            </Switch>
          </Layout>
        </Router>

      </Container>
    );
  }
}
function mapStateToProps(state) {
  console.log(state, 'mapStateToProps');
  return {
    isAuthenticatedUser: state.loginReducer.isAuthenticatedUser,
  }
}
export default connect(mapStateToProps)(App);

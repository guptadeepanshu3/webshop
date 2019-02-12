// Deepanshu
import Enzyme, { mount } from "enzyme";
import React from "react";
import Cart from "../app/containers/Cart";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../app/state/actions'
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock'
import { cacheMiddleware } from '../app/configureStore'
import cartReducer from "../app/state/reducers/cartReducer";
import Adapter from 'enzyme-adapter-react-16'


const middlewares = [thunk, cacheMiddleware]
const mockStore = configureMockStore(middlewares)
Enzyme.configure({ adapter: new Adapter() })
describe('async actions', () => {

    afterEach(() => {
        fetchMock.restore();
    })

    it('addItem with cart, store container mock', () => {


        // fetchMock.get('https://reactprojectdbserver.azurewebsites.net/products', [{id: 1},{id: 2}]);

        const item = { "id": 1, "categoryId": 1, "name": "OnePlus 6t", "shortDescription": "Sample Short Description", "longDescription": "Sample Long Description", "price": 38000, "imageUrl": "https://via.placeholder.com/250x250.png?text=OnePlus 6t", "ratings": { "avgRating": 4.5, "totalReviews": 20 }, "views": 10023 };
        const expectedActions = [
            actions.addToCart(item)
        ]

        const store = mockStore({ cartItems: [] })
        return store.dispatch(actions.addToCart(item)).then(() => {
            let wrapper = mount(<Provider store={store}>
                <Cart />
            </Provider>);

            expect(wrapper.find("tr").length).toBe(1);
        })





    })
})
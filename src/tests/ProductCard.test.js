import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
// Components
import ProductCard from '../app/components/common/ProductCard';

Enzyme.configure({adapter:new Adapter()})

function setup() {
  const props = {
    cartItem: {},
  };
  const wrapper = shallow(<ProductCard />);
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have product card', () => {
    const { wrapper } = setup();
    expect(wrapper).toHaveLength(1)
  });
});
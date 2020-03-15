import React from 'react';

import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

test('should render Header correcly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();

    // renderer.render(<Header></Header>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
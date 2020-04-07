import React from 'react';

import { shallow } from 'enzyme';
import { LoadingIndicator } from '../../components/LoadingIndicator';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<LoadingIndicator />);
});

test('should render LoadingIndicator correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

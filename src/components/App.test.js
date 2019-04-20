import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import "../setupTests"

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});
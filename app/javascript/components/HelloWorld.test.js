import React from 'react';
import { mount } from 'enzyme';

import HelloWorld from './HelloWorld.js'

test("HelloWorld Component", () => {
  const wrapper = mount(<HelloWorld/>);
  expect(wrapper.contains(<div>What is 5+2?</div>)).toBe(true)
})
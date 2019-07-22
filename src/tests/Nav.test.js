import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';

describe('Nav', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('#home-link')).to.have.lengthOf(1);
  });

  it('renders all links', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('#link').children()).to.have.lengthOf(6)
  })

  it('renders image', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('#home-link')).to.have.lengthOf(1)
  })
})
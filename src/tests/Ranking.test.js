import React from 'react';
import Ranking from '../components/Ranking';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

describe('Ranking', () => {
  const fixture = {
    first: 2,
    second: 4,
    third: 1,
    fourth: 5,
    fifth: 4
  }

  const wrapper = {
    handleSubmit: () => fixture,
  };

  it('mocks data send', () => {
    expect(wrapper.handleSubmit()).to.equal(fixture);
  });

  it('checks Ranking heading', () => {
    const wrapper = shallow(<Ranking />);
    const heading = wrapper.find('.ranking-heading');
    expect(heading.text()).to.equal("Rank the articles")
  });

  it('checks Ranking form', () => {
    const wrapper = mount(<Ranking />);
    const form = wrapper.find('.input-wrapper');
    expect(form).to.have.lengthOf(3)
  });
})
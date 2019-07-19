import React from 'react';
import Article1 from '../components/Article1';
import { expect } from 'chai';
import { mount } from 'enzyme';

import article1data from '../articleData/article1'

describe('Article1', () => {
  it('renders Article 1', () => {
    const wrapper = mount(<Article1 articleData={article1data} />);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });

  it('checks Article 1 heading', () => {
    const wrapper = mount(<Article1 articleData={article1data} />);
    const heading = wrapper.find('.heading');
    expect(heading.text()).to.equal("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
  });

  it('checks Article 1 image', () => {
    const wrapper = mount(<Article1 articleData={article1data} />);
    const image = wrapper.find('.image');
    expect(image.prop('src')).to.equal("https://picsum.photos/640/420/?random")
  });

  it('checks Article 1 body', () => {
    const wrapper = mount(<Article1 articleData={article1data} />);
    const body = wrapper.find('.body-paragraph p:first-child');
    expect(body.text()).to.contain("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
  });
})
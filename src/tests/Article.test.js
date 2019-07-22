import React from 'react';
import Article from '../components/Article';
import { expect } from 'chai';
import { mount } from 'enzyme';

import article1data from '../articleData/article1'

describe('Article1', () => {
  it('renders Article 1', () => {
    const wrapper = mount(<Article body={article1data.body} />);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });

  it('checks Article 1 heading', () => {
    const wrapper = mount(<Article body={article1data.body} />);
    const heading = wrapper.find('h1#heading');
    expect(heading.text()).to.equal("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
  });

  it('checks Article 1 image', () => {
    const wrapper = mount(<Article body={article1data.body} />);
    const image = wrapper.find('img#image-2');
    expect(image.prop('src')).to.equal("https://picsum.photos/640/420/?random")
  });

  it('checks Article 1 body', () => {
    const wrapper = mount(<Article body={article1data.body} />);
    const body = wrapper.find('#body-paragraph-1');
    expect(body.text()).to.contain("Etiam ornare nulla in sem pharetra, vel varius magna tempus.")
  });
})
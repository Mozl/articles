import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import Nav from '../components/Nav';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Nav', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
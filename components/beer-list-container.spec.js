import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { BeerListContainer } from './beer-list-container';
import { InputArea } from './input-area';
import { BeerList } from './beer-list';

describe('BeerListContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<BeerListContainer/>);
  });

  it('should render InputArea and BeerList', () => {
    expect(wrapper.containsAllMatchingElements([
      <InputArea />,
      <BeerList />
    ])).to.equal(true);
  });

  it('should start with an empty list', () => {
    expect(wrapper.state('beers')).to.eql([]);
  });

  it('adds item to the list', () => {
    wrapper.instance().addItem('Sam Adams');
    expect(wrapper.state('beers')).to.eql(['Sam Adams']);
  });

  it('passes addItem to InputArea', () => {
    const inputArea = wrapper.find(InputArea);
    const addItem = wrapper.instance().addItem;
    expect(inputArea.prop('onSubmit')).to.eql(addItem);
  });

  it('passes a bound addItem function to InputArea', () => {
    const inputArea = wrapper.find(InputArea);
    inputArea.prop('onSubmit')('Sam Adams');
    expect(wrapper.state('beers')).to.eql(['Sam Adams']);
  });

  it('renders the items', () => {
    wrapper = mount(<BeerListContainer/>);
    wrapper.instance().addItem('Sam Adams');
    wrapper.instance().addItem('Resin');
    expect(wrapper.find('li').length).to.equal(2);
  });

});
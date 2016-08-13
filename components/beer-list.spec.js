import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { BeerList } from './beer-list';

describe('the environment', () => {
  it('works, hopefully', () => {
    expect(true).to.be.true;
  });
});

describe('BeerList', () => {
  let wrapper;

  it('should render zero items', () => {
    wrapper = shallow(<BeerList items={[]} />);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render undefined items', () => {
    wrapper = shallow(<BeerList items={undefined}/>);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render some items', () => {
    const items = ['Sam Adams', 'Resin', 'Octoberfest'];
    wrapper = shallow(<BeerList items={items}/>);
    expect(wrapper.find('li')).to.have.length(3);
  });
});
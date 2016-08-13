import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { InputArea } from './input-area';
import { spy } from 'sinon'

describe('InputArea', () => {
  let wrapper;

  it('should contain an input and a button', () => {
    wrapper = shallow(<InputArea />);
    expect(wrapper.containsAllMatchingElements([
      <input />,
      <button>Add</button>
    ])).to.equal(true);
  });

  it('should accept input', () => {
    wrapper = mount(<InputArea/>);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Resin' } });
    expect(wrapper.state('text')).to.equal('Resin');
    expect(input.prop('value')).to.equal('Resin');
  });

  it('should call onSubmit whan Add is clicked', () => {
    const addItemSpy = spy();
    wrapper = shallow(<InputArea onSubmit={addItemSpy} />);
    wrapper.setState({ text: 'Octoberfest' });
    const addButton = wrapper.find('button');

    addButton.simulate('click');

    expect(addItemSpy.calledOnce).to.equal(true);
    expect(addItemSpy.calledWith('Octoberfest')).to.equal(true);
  });
});
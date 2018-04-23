import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Pagination from '../../components/internal/Pagination';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Pagination - Shallow Rendering', () => {
  it('to have the correct number of Pagination classes', () => {
    const wrapper = shallow(
      <Pagination
        onChange={() => alert('Switch Page...')}
        page={3}
        pagesize={4}
        numPages={6}
      />,
     );
    expect(wrapper.find('.mars')).to.have.length(2);
  });
});

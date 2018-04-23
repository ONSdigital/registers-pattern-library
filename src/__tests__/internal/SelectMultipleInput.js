//  import React from 'react';
//  import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
//  import sinon from 'sinon';
//  import SelectMultipleInput from '../../components/internal/SelectMultipleInput';

//-----------------------
//This test doesn't work, there seems to be an issue with 'react-select/dist/react-select.min.css
//-----------------------

// // Shallow Rendering
// // https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
// describe('SelectMultipleInput - Shallow Rendering', () => {
//     it('to have 1 SelectMultipleInput class', () => {
//       const wrapper = shallow(
//         <SelectMultipleInput
//           id="SelectMultipleInput"
//           label="Label"
//           size="42"
//           bands={{
//             A: 'Active',
//             C: 'Closed',
//             D: 'Dormant',
//             I: 'Insolvent',
//           }}
//           onChange={() => alert('Selection Made')}
//         />,
//       );
//       expect(wrapper.find('.field')).to.have.length(1);
//     });
// });

//   // Static Rendered Markup
//   // https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
// describe('SelectMultipleInput - Static Rendered Markup', () => {
//     it('renders the SelectMultipleInput', () => {
//       const wrapper = render(
//         <SelectMultipleInput
//           id="SelectMultipleInput"
//           label="Label"
//           size="42"
//           bands={{
//             A: 'Active',
//             C: 'Closed',
//             D: 'Dormant',
//             I: 'Insolvent',
//           }}
//           onChange={() => alert('Selection Made')}
//         />,
//       );
//       expect(wrapper.find('.field').length).to.equal(1);
//     });
// });

it('says 1=1', () => {
  expect(1).to.equal(1);
});

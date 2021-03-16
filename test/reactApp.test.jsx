import React from 'react';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReviewApp from '../client/components/reviewApp';

enzyme.configure({ adapter: new Adapter() });

describe('Should render the Review component', () => {
  var wrapper;

  beforeAll(() => {
    wrapper = enzyme.shallow(<ReviewApp />, { disableLifecycleMethods: true });
  });

  test('init test', (done) => {
    expect('hi').toBe('hi')
    expect(wrapper).toBeTruthy()
    // expect(wrapper.containsAllMatchingElements([<ReviewList />])).toBe(true);
    done();
  })


})
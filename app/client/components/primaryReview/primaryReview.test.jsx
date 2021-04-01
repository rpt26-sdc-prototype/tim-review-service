import React from 'react';
import enzyme from 'enzyme';
import styled from 'styled-components'

import PrimaryReview from './primaryReview.jsx'

describe('running a test in the component dir', () => {
  it('Should pass a test', (done) => {
    expect(2)toBeLessThanOrEqual(2);
    done();
  })
})
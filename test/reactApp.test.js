import React from 'react';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../client/index';

enzyme.configure({ adapter: new Adapter() });


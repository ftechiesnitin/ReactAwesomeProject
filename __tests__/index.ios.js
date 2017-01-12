import 'react-native';
import React from 'react';
import ReactAwesomeProject from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ReactAwesomeProject />
  );
});

import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/externalStories.js');
  require('../src/stories/internalStories.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
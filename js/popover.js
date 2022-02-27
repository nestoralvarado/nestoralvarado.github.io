import { createPopper } from '@popperjs/core';
import './bootstrap.css';

const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

createPopper(popcorn, tooltip, {
  placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ],
});
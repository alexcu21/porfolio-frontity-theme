import React from 'react'
import Root from './Root'

export default {
  name: "alex-portfolio-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMenuOpen:false,
    }
  },
  actions: {
    theme: {
      openMenu:({state}) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu:({state}) => {
        state.theme.isMenuOpen = false;
      },
    }
  }
};

import React from 'react'
import Root from './Root'

export default {
  name: "alex-portfolio-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMobileMenuOpen:false,
      menu:[
          ['Home', '/'],
          ['My Projects', '/all-projects'],
      ],
    }
  },
  actions: {
    theme: {
      toggleMobileMenu:({state}) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu:({state}) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeCSR: () => {
        import("webfontloader").then((WebFontLoader) => {
          WebFontLoader.load({
            google: {
              families: [
                "Exo:100,200,400,600:latin-ext",
                "Cantarell:500,400,700:latin-ext",
              ],
            },
          });
        });
      },
    }
  }
};

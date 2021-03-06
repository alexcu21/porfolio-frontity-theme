import React from "react";
import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";
import variablesCSS from "./css/variablesCss";

function MobileMenu({ state, actions }) {
    const { isMobileMenuOpen } = state.theme;
    return (
        <>
            <MenuToggle onClick={actions.theme.toggleMobileMenu}>
                {isMobileMenuOpen ? (
                    <>
                        {/* Add some style to the body when menu is open,
            to prevent body scroll */}
                        <Global styles={{ body: { overflowY: "hidden" } }} />
                        <CloseIcon color={variablesCSS.purple} size="35px" />
                    </>
                ) : (
                    <HamburgerIcon color={variablesCSS.purple} size="35px" />
                )}
            </MenuToggle>
            {/* If the menu is open, render the menu modal */}
            {isMobileMenuOpen && <MenuModal />}
        </>
    );
}

const MenuToggle = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  background: transparent;
  border: 0;
  color: ${variablesCSS.purple};
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;
  @media ${variablesCSS.mobilQuery} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default connect(MobileMenu);

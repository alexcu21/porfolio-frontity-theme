import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import variablesCSS from "./css/variablesCss"

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
    <NavContainer>
        <Link href='/'>Home</Link>
        <Link href='/projects-archive'>Projects</Link>
    </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
  @media screen and (max-width: ${variablesCSS.mobil}) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: ${variablesCSS.white};
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: ${variablesCSS.white};
    }
  }
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

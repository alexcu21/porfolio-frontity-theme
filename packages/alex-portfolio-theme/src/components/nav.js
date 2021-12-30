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
        {state.theme.menu.map(([name, link]) => {
            // Check if the link matched the current page url
            const isCurrentPage = state.router.link === link;
            return (
                <NavItem key={name}>
                    {/* If link url is the current page, add `aria-current` for a11y */}
                    <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
                        {name}
                    </Link>
                </NavItem>
            );
        })}
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
  @media ${variablesCSS.mobilQuery} {
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
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: ${variablesCSS.purple};
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

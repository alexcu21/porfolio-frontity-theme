import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import variablesCSS from "./css/variablesCss";


const Header = ({ state }) => {

    return (
        <>
            <Container>
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
            </Container>
        </>
    );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  max-width: 70rem;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: ${variablesCSS.white};
  display: flex;
  flex-direction: row;
  @media ${variablesCSS.mobilQuery}{
    display: none;
  }
  a{
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const NavItem = styled.div`
  a{
    cursor: pointer;
    color:${variablesCSS.purple};
    text-decoration: none;
    margin: 1em;
    &:hover{
      text-decoration: underline;
    }
  }
`


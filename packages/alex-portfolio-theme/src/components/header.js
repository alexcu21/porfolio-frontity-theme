import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import variablesCSS from "./css/variablesCss";


const Header = ({ state }) => {

    return (
        <>
            <Container>
                <Link href='/'>Home</Link>
                <Link href='/all-projects'>Projects</Link>
                <Link href='/archive'>Blog</Link>
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


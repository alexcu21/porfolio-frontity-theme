import React from "react";
import { connect, styled } from "frontity";
import Nav from './nav'
import MobileMenu from "./menu";
import variablesCSS from "./css/variablesCss";


const Header = ({ state }) => {
    return (
        <>
            <Container>
                <MobileMenu/>
            </Container>
            <Nav/>

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
  justify-content: space-around;
`;





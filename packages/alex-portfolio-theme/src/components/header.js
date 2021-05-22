import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";


const Header = ({ state }) => {
    return (
        <>
            <Container>
                <Link href='/'>Home</Link>
                <Link href='/project-archive'>Projects</Link>
            </Container>
        </>
    );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: #fff;
  display: flex;
  flex-direction: row;
`;


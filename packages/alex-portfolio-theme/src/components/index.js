import React from 'react';
import {connect, Global, css, styled, Head} from "frontity";
import Link from './link';
import List from './list';
import Post from "./post";
import Page from './page';
import Header from "./header";
import Projects from "../pages/projects";

const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    return (
        <>
            <Global
                styles={css`
                  *{
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                  }
                  html{
                    font-family: sans-serif;
                  }
                `}
            />
            <Head>
                <title>Alex Cuadra's Portfolio</title>
                <meta name="description" content="This is my portfolio"/>
            </Head>
            <HeaderContainer>
                <HeaderContent>
                    <Header/>
                </HeaderContent>
            </HeaderContainer>

            <Main>

                {data.isPostTypeArchive && <Projects/>}
                {/*{data.isArchive && <List/>}*/}
                {data.isPost && <Post/>}
                {data.isPage && <Page/>}
            </Main>
        </>
    );
}

export default connect(Root);

const HeaderContainer = styled.header`
  background-color: #eee;
  border-width: 0 0 8px 0;
  border-style: solid;
`

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`

const Menu = styled.nav`
  display:flex;
  flex-direction: row;
  margin-top: 1em;
  & > div{
    margin-right: 1em;

  }
`

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img{
    max-width: 100%;
  }
  h2{
    margin: 0.5em 0;
  }
  p{
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
`

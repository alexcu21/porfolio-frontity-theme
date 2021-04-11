import React from 'react';
import {connect, Global, css, styled} from "frontity";
import Link from './link';
import List from './list';
import Post from "./post";
import Page from './page';

const Root = ({state}) => {
    const data = state.source.get(state.router.link)
    return (
        <>
            <Global
                styles={css`
                  html{
                    font-family: sans-serif;
                  }
                `}
            />
            <Header>
                <h1>Alex's portfolio during 2021 - 2022</h1>
                <p>current URL: {state.router.link}</p>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/page/2">Page 2</Link>
                    <Link href="/lorem-ipsum">Lorem</Link>
                </nav>
            </Header>
        
            <main>
                {data.isArchive && <List/>}
                {data.isPost && <Post/>}
                {data.isPage && <Page/>}
            </main>
        </>
    );
}

export default connect(Root);

const Header = styled.header`
  background-color: #eee;
`

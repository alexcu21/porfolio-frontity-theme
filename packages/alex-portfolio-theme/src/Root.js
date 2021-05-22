import React, {useEffect} from 'react';
import {connect, Global, css, styled, Head} from "frontity";
import Switch from "@frontity/components/switch";
import Post from "./components/post";
import Page from './components/page';
import Home  from './pages/home'
import Header from "./components/header";
import Projects from "./pages/projects";
import Loading from "./components/loading";
import Project from "./components/project";

const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    useEffect(() => {
        actions.source.fetch("/project")
        actions.source.fetch("/project-archive")
        actions.source.fetch("/home")

    }, [])

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

                <Header />

            </HeaderContainer>

            <Main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <Home when={data.isHome}/>
                    {data.isPost && <Post/>}
                    {data.isPage && <Page/>}
                    {data.isProjectArchive && <Projects/>}
                    {data.isProject && <Post element="project"/>}
                </Switch>
            </Main>
        </>
    );
}

export default connect(Root);

const HeaderContainer = styled.header`
  background-color: #FED9DA;
`

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
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

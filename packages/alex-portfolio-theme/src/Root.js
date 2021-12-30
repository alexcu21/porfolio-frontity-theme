import React, {useEffect} from 'react';
import {connect, Global, css, styled, Head} from "frontity";
import Switch from "@frontity/components/switch";
import Post from "./components/post";
import Page from './components/page';
import Home  from './pages/home'
import Header from "./components/header";
import Hero from "./components/Hero"
import Projects from "./pages/projects";
import Loading from "./components/loading";
import Footer from "./components/footer";
import variablesCSS from './components/css/variablesCss'

const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    useEffect(() => {
        actions.source.fetch("/project")
        actions.source.fetch("/all-projects")
        actions.source.fetch("/home")
        actions.source.fetch("/archive")

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
                    font-family: ${variablesCSS.secondaryFont};
                  }
                  h1, h2, h3, h4, h5, h5{
                  font-family: ${variablesCSS.primaryFont};
                  }
                `}
            />
            <Head>
                <title>Alex Cuadra's Portfolio</title>
                <meta name="description" content="This is my portfolio"/>
            </Head>
            <HeaderContainer>

                <Header />
                <Hero/>

            </HeaderContainer>

            <Main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <Home when={data.isHome}/>
                    {data.isProjectArchive && <Projects/>}
                    {data.isPost && <Post/>}
                    {data.isPage && <Page/>}
                    {data.isProject && <Post element="project"/>}
                </Switch>
            </Main>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </>
    );
}

export default connect(Root);

const HeaderContainer = styled.header`
  background-color: ${variablesCSS.pink};
  padding: 2em 7em 4em 7em;
  @media ${variablesCSS.mobilQuery}{
    padding:2rem;
  }
`

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`

const Main = styled.main`
  max-width: 80vw;
  padding: 1em;
  margin: auto;
  @media ${variablesCSS.mobilQuery}{
    max-width:98vw;
    padding:0.5rem;
  }

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

const FooterContainer = styled.footer`
  height: 40vh;
 background-color: ${variablesCSS.purple};
  color:${variablesCSS.white};
  display: flex;
  justify-content: center;
  @media ${variablesCSS.mobilQuery}{  
    height: 50vh;
  }
`

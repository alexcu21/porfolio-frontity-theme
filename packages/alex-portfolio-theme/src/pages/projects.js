import React, {useEffect} from 'react'
import {styled,connect} from "frontity";
import Technologies from "../components/technologies";
import Link from "@frontity/components/link";
import variablesCSS from "../components/css/variablesCss"

const Projects = ({state, actions}) => {
    useEffect(() => {
        actions.source.fetch("/project")
        actions.source.fetch("/all-projects")

    }, [])

    const data = state.source.get(state.router.link)

    return(
        <ProjectsWrapper>
            <h2>My Projects</h2>

            <GridContainer>
            {

                data.items.map( ({id}) => {
                    const project = state.source.project[id]

                    return(
                            <Link link={project.link} key={project.id}>
                                <article key={id}>
                                    <h3>{project.title.rendered}</h3>
                                    <ImageContainer>
                                        <img src={project.acf.screenshot.url} alt={project.acf.screenshot.name}/>
                                    </ImageContainer>
                                    <Technologies techId={project.technology}/>
                                </article>

                            </Link>

                    )
                })

            }
            </GridContainer>
        </ProjectsWrapper>
    )
}

export default connect(Projects)

const ProjectsWrapper = styled.section`
  margin: 0 auto;
  h2{
    font-size: 4rem;
    text-align: center;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  justify-items:center;
  text-decoration: none;
  margin-bottom: 2rem;
  @media ${variablesCSS.tabletQuery}{
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${variablesCSS.mobilQuery}{
    grid-template-columns: repeat(1, 1fr);
  }
 
  a{
    text-decoration: none;
  }
  h3{
    text-align: center;
    margin-bottom: 1rem;
    text-decoration: none;
  }
  article{
    
    border: 1px solid ${variablesCSS.purple};
    background: ${variablesCSS.pink};
    text-decoration: none;
    min-height: 40%;
    max-height: 42rem;
    height: 28rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    &:hover{
      box-shadow: 12px 12px ${variablesCSS.purple};
    }

    @media ${variablesCSS.tabletQuery}{
      margin-bottom:1rem;
    }
    @media ${variablesCSS.mobilQuery}{
      margin-bottom:1rem;
    }
  }
  ul{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top:1.2rem;
  }
  li{
    list-style-type: none;
    text-decoration: none;
    margin:0.1rem 0;
    padding: 0.2rem 0.5rem;
    background-color: ${variablesCSS.purple};
    color: ${variablesCSS.white};
    border-radius: 1rem;
  }
`
const ImageContainer = styled.div`
  img{
    width: 100%;
  }
`

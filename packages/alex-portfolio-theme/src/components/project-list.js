import {useEffect} from 'react'
import {connect, styled} from "frontity";
import Technologies from "../components/technologies";
import Project from "./project";
import Link from "./link";
import variablesCSS from './css/variablesCss'

const ProjectList = ({state, actions}) => {
    useEffect(() => {
        actions.source.fetch("/project")

    }, [])
    const projects = state.source.project

    return(
        <>
            <ProjectListStyles>
                <h2>Latest Projects</h2>

                { typeof projects === 'undefined' ? <p>No projects</p> : Object.values(projects).reverse().slice(0,3).map(
                    (project)=>{
                        return(
                            <ArticleProject key={project.id}>
                                <img src={project.acf.screenshot.url} alt={project.acf.screenshot.name}/>
                                <Info>
                                    <InfoWrapper>
                                        <Link href={project.link}>
                                            <h4 dangerouslySetInnerHTML={{__html:project.title.rendered}}></h4>
                                        </Link>
                                        <TechWrapper>
                                                <Technologies

                                                    techId={project.technology}
                                                />
                                        </TechWrapper>
                                        <p dangerouslySetInnerHTML={{__html:project.content.rendered}}></p>
                                    </InfoWrapper>
                                    <LinksWrapper>
                                        <a className="btn" href={project.acf.project_link}>See Project</a>
                                        <a className="btn" href={project.acf.github_link}>See Code</a>
                                    </LinksWrapper>
                                </Info>

                            </ArticleProject>
                        )
                    }
                ) }
            </ProjectListStyles>

        </>
    );
};

export default connect(ProjectList)

const ProjectListStyles = styled.div`
    max-width: 75rem;
    margin: 0 auto;
  h2{
    text-align: center;
    font-size: 3rem;
    color: ${variablesCSS.purple};
    letter-spacing: 0.01em;
    margin: 3.5rem auto;
  }
`

const ArticleProject = styled.article`
  @media ${variablesCSS.mobilQuery}{
    flex-direction: column;
  }

  @media ${variablesCSS.tabletQuery}{
    flex-direction: column;
  }
  
  &:nth-child(odd){
    flex-direction: row-reverse;
    background-color: ${variablesCSS.purple};
    box-shadow: 12px 12px ${variablesCSS.pink};
    color:${variablesCSS.white};
    @media ${variablesCSS.mobilQuery}{
      flex-direction: column;
    }
    @media ${variablesCSS.tabletQuery}{
      flex-direction: column;
    }
    h4{
      color: ${variablesCSS.white};
    }
    li{
      background-color: ${variablesCSS.pink};
      color: ${variablesCSS.black};
      padding: 0.2rem 0.5rem;
      border-radius: 1rem;
      font-weight: bold;
    }

    
        a.btn {
          color: ${variablesCSS.pink};
          padding: 0.5rem 0.5rem;
          border: 1px solid ${variablesCSS.pink};
          margin: 1.5rem;
          text-decoration: none;
          
          &:hover {
            background-color: ${variablesCSS.pink};
            color: ${variablesCSS.purple};
          }
        }
    
  }
  display: flex;
  margin: 4rem 1rem;
  background-color: #FED9DA;
  box-shadow: 12px 12px ${variablesCSS.purple};

  li{
    background-color: ${variablesCSS.purple};
    color: ${variablesCSS.white};
    padding: 0.2rem 0.5rem;
    border-radius: 1rem;
    font-weight: bold;
  }
    img{
      max-width: 30rem;
      width: 100%;
      height: auto;
      @media ${variablesCSS.tabletQuery}{
        max-width: 100%;
      }
    }
  
`
const Info = styled.div`
  padding: 1.2rem;
  margin-left: 1rem;
  max-width: 42rem;
  @media ${variablesCSS.mobilQuery}{
    padding:0.7rem;
    margin-left:0;
  }
`

const InfoWrapper = styled.div`
  h4{
    text-align: center;
    font-size: 2rem;
    color: ${variablesCSS.purple};
    letter-spacing: 0.01em;
    margin: 1rem auto;
  }
`

const LinksWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  a.btn{
    padding: 0.5rem 0.5rem;
    border: 1px solid ${variablesCSS.purple};
    margin: 1.5rem;
    text-decoration: none;
    &:hover{
      background-color:${variablesCSS.purple};
      color:${variablesCSS.pink};
    }
  }

`

const TechWrapper = styled.div`
  width: 100%;
  ul{
    display: flex;
    justify-content: flex-start;
    list-style: none;
    margin-bottom: 1rem;
    li{
      margin-right: 1rem;
    }
  }
`


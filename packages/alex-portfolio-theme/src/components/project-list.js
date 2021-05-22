import {useEffect} from 'react'
import {connect, styled} from "frontity";
import Technologies from "../components/technologies";
import Project from "./project";
import Link from "./link";

const ProjectList = ({state, actions}) => {
    useEffect(() => {
        actions.source.fetch("/project")

    }, [])
    const projects = state.source.project

    return(
        <>


            { typeof projects === 'undefined' ? <p>No projects</p> : Object.values(projects).reverse().slice(0,3).map(
                (project)=>{
                    return(
                        <article key={project.id}>
                            <img src={project.acf.screenshot.url} alt={project.acf.screenshot.name}/>
                            <Link href={project.link}>
                                <h4 dangerouslySetInnerHTML={{__html:project.title.rendered}}></h4>
                            </Link>
                            <p dangerouslySetInnerHTML={{__html:project.content.rendered}}></p>
                           <LinksWrapper>
                               <Link href={project.acf.github_link}>See Project</Link>
                               <Link href={project.acf.project_link}>See Code</Link>
                           </LinksWrapper>

                        </article>
                    )
                }
            ) }

        </>
    );
};

export default connect(ProjectList)

const LinksWrapper = styled.div`
  text-align: center;
`

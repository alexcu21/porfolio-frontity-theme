import React, {useEffect} from 'react'
import {styled,connect} from "frontity";
import Technologies from "../components/technologies";

const Projects = ({state, actions}) => {
    useEffect(() => {
        actions.source.fetch("/project")
        actions.source.fetch("/all-projects")

    }, [])

    const data = state.source.get(state.router.link)

    return(
        <>
            <h2>Projects</h2>
            <p>Projects I've participated</p>
            {
                data.items.map( ({id}) => {
                    const project = state.source.project[id]

                    return(
                        <GridContainer>
                            <article key={id}>
                                <h3>{project.title.rendered}</h3>
                                <ul>
                                    <Technologies
                                        techId={project.technology}
                                    />
                                </ul>
                            </article>
                        </GridContainer>
                    )
                })
            }
        </>
    )
}

export default connect(Projects)

const GridContainer = styled.div`
  
`

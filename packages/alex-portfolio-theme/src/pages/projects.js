import React from 'react'
import {connect} from "frontity";
import Technologies from "../components/technologies";

const Projects = ({state}) => {
    const data = state.source.get(state.router.link)

    return(
        <>
            <h2>Projects</h2>
            <p>Projects I've participated ({data.items.length})</p>
            {
                data.items.map( ({id}) => {
                    const project = state.source.project[id]

                    return(
                        <article key={id}>
                            <h3>{project.title.rendered}</h3>
                           <ul>
                               <Technologies

                                   techId={project.technology}
                               />
                           </ul>


                        </article>
                    )
                })
            }
        </>
    )
}

export default connect(Projects)

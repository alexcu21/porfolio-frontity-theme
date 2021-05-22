import React from 'react';
import {connect, styled} from "frontity";

const Project = ({state}) => {
    const data = state.source.get(state.router.link)
    const project = state.source[data.type][data.id]

    return(
        <div>
            <p>Desde projecto single</p>
            {/*<h2>{project.title.rendered}</h2>*/}

            {/*<div dangerouslySetInnerHTML={ {__html: project.content.rendered} }  />*/}
        </div>
    )
}

export default connect(Project)


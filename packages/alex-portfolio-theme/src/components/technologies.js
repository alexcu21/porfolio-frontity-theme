import React from 'react'
import {connect} from "frontity";

const Technologies = ({state, techId}) => {
    const techName = state.source.technology
    return(

        <ul>{techId.map((item)=>{

            return(
                    <li key={techId + techName[item].name}> {techName[item].name}</li>

            )
        })}</ul>
    )
}

export default connect(Technologies)

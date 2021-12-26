import React, { useEffect } from 'react'
import {connect, styled} from "frontity";
import ProjectList from "../components/project-list";
import List from "../components/list";


const Home = ({state, actions}) => {
    const pageHome = state.source.page[9]


    useEffect(() => {
        actions.source.fetch("/project")
        actions.source.fetch("/projects-archive")
        actions.source.fetch("/home")

    }, [])


    return(
        <>
            <ProjectList/>

            <List/>

        </>

    )
};

export default connect(Home)






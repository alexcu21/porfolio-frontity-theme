import React, { useEffect } from 'react'
import {connect, styled} from "frontity";
import ProjectList from "../components/project-list";
import List from "../components/list";
import Link from "../components/link";
import Project from "../components/project";


const Home = ({state, actions}) => {
    const pageHome = state.source.page[9]


    useEffect(() => {
        actions.source.fetch("/project")
        actions.source.fetch("/projects-archive")
        actions.source.fetch("/home")

    }, [])


    return(
        <>
            <Hero>
                <ProfilePhoto>
                    {typeof pageHome === "undefined" ? null :  <img src={pageHome.acf.profile_photo} alt="profile photo"/>}
                </ProfilePhoto>
                <HeadingLine>
                    {typeof pageHome === "undefined" ? null :  <h1>{pageHome.acf.heading}</h1>}
                </HeadingLine>
                <SubHeadingLine>
                    {typeof pageHome === "undefined" ? null :  <p>{pageHome.acf.sub_heading}</p>}
                </SubHeadingLine>
                <SkillList>
                    {
                        typeof pageHome === "undefined" ? null :
                            <div>
                                <div>{pageHome.acf.skill_1.skill_icon}</div>
                                <p>{pageHome.acf.skill_1.skill_description}</p>
                            </div>
                    }
                    {
                        typeof pageHome === "undefined" ? null :
                            <div>
                                <div>{pageHome.acf.skill_2.skill_icon}</div>
                                <p>{pageHome.acf.skill_2.skill_description}</p>
                            </div>
                    }
                    {
                        typeof pageHome === "undefined" ? null :
                            <div>
                                <div>{pageHome.acf.skill_3.skill_icon}</div>
                                <p>{pageHome.acf.skill_3.skill_description}</p>
                            </div>
                    }
                </SkillList>
            </Hero>
            <h2>Latest Projects</h2>

            <ProjectList/>

            <h2>Latest Posts</h2>
            <List/>
        </>

    )
};

export default connect(Home)

const Hero = styled.div`
  text-align: center;
  background-color: #FED9DA;
`
const ProfilePhoto = styled.div`
  max-width: 30%;
  margin: 0 auto
`

const HeadingLine = styled.div`
  h1{
    font-size: 5rem;
  }
`

const SubHeadingLine = styled.div`
  p{
    font-size: 1.5rem;
    
  }
`

const SkillList = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
`


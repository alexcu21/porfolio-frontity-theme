import React, {useEffect}from "react"
import {connect, styled} from "frontity";
import variablesCSS from "./css/variablesCss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'

const Hero = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    const pageHome = state.source.page[9]

    const isHomePage = data.isHome

    console.log(isHomePage)

    useEffect(() => {
        actions.source.fetch("/home")
    }, [])

    if(isHomePage){
        return(

            <HeroContent>
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
                                <FontAwesomeIcon icon={pageHome.acf.skill_1.skill_icon} />
                                <p>{pageHome.acf.skill_1.skill_description}</p>
                            </div>
                    }
                    {

                        typeof pageHome === "undefined" ? null :
                            <div>
                                <FontAwesomeIcon icon={pageHome.acf.skill_2.skill_icon} />
                                <p>{pageHome.acf.skill_2.skill_description}</p>
                            </div>
                    }
                    {
                        typeof pageHome === "undefined" ? null :
                            <div>
                                <FontAwesomeIcon icon={pageHome.acf.skill_3.skill_icon} />
                                <p>{pageHome.acf.skill_3.skill_description}</p>
                            </div>
                    }
                </SkillList>
            </HeroContent>
        )
    }else{
        return (<HeroEmpty></HeroEmpty>)
    }
}

export default connect(Hero)

const isPageHomeActive = {
    true: true,
    false: false
}

const HeroContent = styled.div`
  text-align: center;
  background-color: ${variablesCSS.pink};
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 2em;
  margin-bottom: 2em;
  display:block;
`
const ProfilePhoto = styled.div`
  max-width: 100%;
  width: 20em;
  margin: 0 auto;
  img{
    width: 100%;
    height: auto;
    border-radius:50%;
    border: 8px ${variablesCSS.purple} solid;
  }
`

const HeadingLine = styled.div`
  h1{
    font-size: 6rem;
    color: ${variablesCSS.purple};
    letter-spacing: 0.01em;
    margin: 3.5rem auto;
    font-family: ${variablesCSS.primaryFont};
    font-weight: 700;
    @media ${variablesCSS.mobilQuery}{
      font-size: 4rem;
    }
  }
`

const SubHeadingLine = styled.div`
  p{
    font-size: 1.5rem;
    margin: 3.5rem auto;
  }
`

const SkillList = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  gap:5rem;
  margin:3rem 0;
  @media ${variablesCSS.mobilQuery}{
    flex-direction: column;
  }
  p{
    font-weight: 700;
    font-size: 1.2rem;
  }
  .svg-inline--fa{
    font-size: 3rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    color: ${variablesCSS.purple};
  }
`
const HeroEmpty = styled.div`
  display: none;
`

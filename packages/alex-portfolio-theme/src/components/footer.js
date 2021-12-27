import React, {useEffect}from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {connect, styled} from "frontity";
import variablesCSS from "./css/variablesCss";

library.add(fab, faEnvelope)

const Footer = ({state, actions}) => {
    const pageHome = state.source.page[9]
    return(
        <FooterWrapper>

            <ContactWrapper>
                <h3>Contact</h3>
                {
                    typeof pageHome === "undefined" ? null :
                        <div>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <a target="_blank" href={pageHome.acf.mail}>Mail</a>
                        </div>
                }
                {
                    typeof pageHome === "undefined" ? null :
                        <div>
                            <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                            <a target="_blank" href={pageHome.acf.linkedin}>Linkedin</a>
                        </div>
                }
                {
                    typeof pageHome === "undefined" ? null :
                        <div>
                            <FontAwesomeIcon icon={['fab', 'github']}/>
                            <a target="_blank" href={pageHome.acf.github}>Github</a>
                        </div>
                }
                {
                    typeof pageHome === "undefined" ? null :
                        <div>
                            <FontAwesomeIcon icon={['fab', 'twitter']}/>
                            <a target="_blank" href={pageHome.acf.twitter}>Twitter</a>
                        </div>
                }
            </ContactWrapper>
            <CopyWrapper>
                {
                    typeof pageHome === "undefined" ? null :
                        <div>
                            <p>{pageHome.acf.footer_copy}</p>
                        </div>
                }

            </CopyWrapper>

        </FooterWrapper>
    )

}

export default connect(Footer);

const FooterWrapper = styled.footer`
  display: flex;
  margin-top: 2rem;
  justify-content: space-around;
  align-items: center;
  max-width: 80vw;
  width: 100%;
  @media ${variablesCSS.mobilQuery}{
    flex-direction:column;
  }
`

const ContactWrapper = styled.div`
    line-height: 2.5rem;
    margin-top: 2rem;
    a{
      margin-left: 1rem;
      color:${variablesCSS.white};
    }
`

const CopyWrapper = styled.div`
  line-height: 2.5rem;
  margin-top: 2rem;
`

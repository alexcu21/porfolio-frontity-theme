import React from 'react'
import {connect, styled} from "frontity";
import variablesCSS from './css/variablesCss'

const Link = ({ href, actions, children }) => {
    return(

            <Anchor
                href={href}
                onClick={e => {
                    e.preventDefault()
                    actions.router.set(href)
                }}
            >
                {children}
            </Anchor>

    )
}

export default connect(Link)

const Anchor = styled.a`
  color:${variablesCSS.purple};
  text-decoration: none;
  margin: 1em;
`

import React from 'react'
import { connect, styled, useConnect } from "frontity";
import Link from "@frontity/components/link";
import variablesCSS from './css/variablesCss'

const PortfolioLink = ({ children, ...props }) => {
    const { state, actions } = useConnect()

    const onClick = () => {
        if(state.theme.isMobileMenuOpen){
            actions.theme.closeMobileMenu();
        }
    }

    return(

            <Link
                {...props}
                onClick={onClick}
            >
                {children}
            </Link>

    )
}

export default connect(PortfolioLink, {injectProps: false})

const Anchor = styled.a`
  color:${variablesCSS.purple};
  text-decoration: none;
  margin: 1em;
`

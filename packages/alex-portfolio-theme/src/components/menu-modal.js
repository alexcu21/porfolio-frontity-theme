import { styled, connect } from "frontity";
import Link from "./link";
import variablesCSS from "./css/variablesCss";

const MenuModal = ({ state }) => {
    const { menu } = state.theme;
    const isThereLinks = menu != null && menu.length > 0;
    const Url = state.source.url

    return (
        <>
            <MenuOverlay />
            <MenuContent as="nav">
                {isThereLinks &&
                menu.map(([name, link]) => (
                    <MenuLink
                        key={name}
                        link={link}
                        aria-current={state.router.link === link ? "page" : undefined}
                    >
                        {name}

                    </MenuLink>
                ))}
                <a href={Url + "/wp-content/uploads/2021/12/Portfolio-AlexCuadraResume.pdf"} target="_blank">Download CV</a>

            </MenuContent>
        </>
    );
};

const MenuOverlay = styled.div`
  background-color: ${variablesCSS.pink};
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  a{
    width: 100%;
    display: inline-block;
    outline: 0;
    font-size: 20px;
    text-align: center;
    padding: 1.2rem 0;
    text-decoration: none;
  }
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: ${variablesCSS.purple};
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: ${variablesCSS.purple};
    font-weight: bold;
    border-bottom: 4px solid ${variablesCSS.purple};
  }
`;

export default connect(MenuModal);

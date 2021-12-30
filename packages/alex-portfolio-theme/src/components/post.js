import React from 'react';
import {connect, styled} from "frontity";
import Technologies from "./technologies";
import variablesCSS from "./css/variablesCss";

const Post = ({state, element}) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    if(element === 'project'){
        return (
            <ProjectWrapper>
                <ImageContainer>
                    <img src={post.acf.screenshot.url} alt={post.acf.screenshot.name}/>
                </ImageContainer>
                <ProjectInfo>
                    <Technologies techId={post.technology} />
                    <h2 dangerouslySetInnerHTML= {{__html:post.title.rendered}}></h2>
                    <p dangerouslySetInnerHTML = {{__html:post.content.rendered}}></p>
                </ProjectInfo>
                <ButtonsWrapper>
                    <a className="btn" target="_blank" href={post.acf.project_link}>Live Project</a>
                    <a className="btn" target="_blank" href={post.acf.github_link}>Check Code</a>
                </ButtonsWrapper>
            </ProjectWrapper>
        )

    }else{
        return(
            <div>
                <h2>{post.title.rendered}</h2>
                <PostInfo>
                    <p><strong>Author: </strong>{post.acf.source_name}</p>
                    <p><strong>Author Link: </strong><a href={post.acf.source_link} target="_blank">{post.acf.source_name}</a></p>
                </PostInfo>
                <div dangerouslySetInnerHTML={ {__html: post.content.rendered} }  />
            </div>
        )
    }
}

export default connect(Post)

const PostInfo = styled.div`
  background-image: linear-gradient(to right, ${variablesCSS.pink}, ${variablesCSS.white});
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid ${variablesCSS.purple};
  font-size: 0.8em;
  
  & > p{
    margin: 0;
  }
`

const ProjectWrapper = styled.div`
  font-size: 1.2rem;
`
const ImageContainer = styled.div`
  box-shadow: 12px 12px ${variablesCSS.pink};
  margin-bottom: 2.5rem;
`
const ProjectInfo = styled.div`
  ul{
    list-style-type: none;
    margin: 2rem 2rem;
    display: flex;
    li{
      background-color: ${variablesCSS.purple};
      color: ${variablesCSS.white};
      border-radius: 1rem;
      padding: 0.2rem 0.5rem;
      font-size: 1.2rem;
    }
  }
`

const ButtonsWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  a.btn{
    padding: 0.5rem 0.5rem;
    border: 1px solid ${variablesCSS.purple};
    margin: 1.5rem;
    text-decoration: none;
    &:hover{
      background-color:${variablesCSS.purple};
      color:${variablesCSS.pink};
    }
    @media ${variablesCSS.mobilQuery}{
      margin:0.5rem;
    }
  }
`

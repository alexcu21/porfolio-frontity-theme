import React from 'react';
import {connect, styled} from "frontity";
import Technologies from "./technologies";

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
            </ProjectWrapper>
        )

    }else{
        return(
            <div>
                <h2>{post.title.rendered}</h2>
                <PostInfo>
                    <p><strong>Posted:</strong>{post.date}</p>
                    <p><strong>Author:</strong>{author.name}</p>
                </PostInfo>
                <div dangerouslySetInnerHTML={ {__html: post.content.rendered} }  />
            </div>
        )
    }
}

export default connect(Post)

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;
  
  & > p{
    margin: 0;
  }
`

const ProjectWrapper = styled.div`

`
const ImageContainer = styled.div`

`
const ProjectInfo = styled.div`

`

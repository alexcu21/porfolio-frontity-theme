import React from 'react'
import {connect, styled} from "frontity";
import Link from "./link";
import FeaturedMedia from "./featured-media";
import variablesCSS from "./css/variablesCss";

const List = ({state}) => {
    const data = state.source.get(state.router.link)
    return(
        <>
            <HomePostListStyles>
                <h2>Latest Posts</h2>
                <Items>
                    {data.items.map(item => {
                        const post = state.source.post[item.id]
                        return(
                            <PostWrapper key={item.id}>
                                <FeaturedMedia id={post.featured_media} />
                                <Link key={item.id} href={post.link}>
                                    {post.title.rendered}
                                </Link>

                            </PostWrapper>
                        )
                    })}
                </Items>
            </HomePostListStyles>
        </>
    )
}

export default connect(List)

const HomePostListStyles=styled.div`
  margin-top: 7rem;
  h2{
    text-align: center;
    font-size: 3rem;
    color: ${variablesCSS.purple};
    letter-spacing: 0.01em;
    margin: 2rem auto;
  }
`

const Items = styled.div`
  display: grid;
  max-width: 75rem;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  @media ${variablesCSS.mobilQuery}{
    grid-template-columns: 1fr;
  }
    a{
      color: ${variablesCSS.black};
      font-size: 1.2rem;
      font-weight: bold;
      margin: 1.1rem 0;
    }
  & > div{
    margin: 12px 0;
    font-size: 1.5rem;
  }
`
const PostWrapper = styled.div`
  padding: 2rem;
  background-color:${variablesCSS.pink};
  margin: 1rem!important;
  box-shadow: 12px 12px ${variablesCSS.purple};
  
`

// File: /packages/my-first-theme/src/components/list.js

import React from "react"
import { connect } from "frontity"
import List from "../components/list";

const Blog = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <div>
        </div>
    )
}

export default connect(Blog)

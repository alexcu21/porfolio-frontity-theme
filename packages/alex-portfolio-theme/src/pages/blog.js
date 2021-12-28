// File: /packages/my-first-theme/src/components/list.js

import React from "react"
import { connect } from "frontity"

const Blog = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <div>
            {data.items.map((item) => {
                return (
                    <div key={item.id}>
                        {item.type} – {item.id} – {item.link}
                    </div>
                )
            })}
        </div>
    )
}

export default connect(Blog)

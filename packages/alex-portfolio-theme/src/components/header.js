import React from 'react'
import {connect} from "frontity";
import Link from "./link";

const Header = () => {
    return(
        <>
            <Link href="/"> Home</Link>
            <Link href="/project-archive"> Projects</Link>
        </>
    )
}

export default connect(Header)

import React from 'react'
import Social from '../SocialDistancing'
import Gejala from '../Gejala'
import FetchData from '../FetchData'
import Herosection from '../Jumbotron'
import Result from '../Result'
export default function containerComponent() {
    return (
        <>
            <Herosection/>
            <Gejala/>
            <Social id="social-distance" />
            <FetchData id="data"/>
        </>
    )
}

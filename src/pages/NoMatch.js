import React from 'react'
import img from "../assets/404.jpg"
import styled from 'styled-components'

const NoMatchImage = styled.div`
height: 86vh;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-image: url(${img});
`

const NoMatch = () => {
  return (
    <div>
      <NoMatchImage/>
    </div>
  )
}

export default NoMatch

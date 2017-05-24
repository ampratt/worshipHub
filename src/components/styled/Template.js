import React from 'react'
import styled from 'styled-components'
// import {media} from '../utils/media'

export const Header = styled.header`
  text-align: center;
  font-size: 2em;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  min-height: 80vh;
`

export const Main = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

  // font-family: 'Roboto', sans-serif;

  // ${media.handheld`
  //   width: 100%;
  // `}
import React from 'react'
import styled from "styled-components"

const HeaderTitle = styled.h1`
  color: #ff6f00ad;
  font-size: 1.2rem;
`


export const Header = () => {
  return (
    <>
      <header>
        <HeaderTitle>なういBlog</HeaderTitle>
      </header>
    </>
  )
}

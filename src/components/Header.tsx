import React from 'react'
import styled from "styled-components"

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #28788e;
  height: 70px;
`

const HeaderTitle = styled.h1`
  color: #ff6f00ad;
  font-size: 1.2rem;
`

const MenuWrapper = styled.nav`
  padding-top: 20px;
`
const Menu = styled.nav`
  display: flex;
  list-style: none;
`

const MenuItem = styled.li`
  margin-right: 20px;
`


export const Header = () => {
  return (
    <>
      <Wrapper>
        <HeaderTitle>なういBlog</HeaderTitle>
        <MenuWrapper>
          <Menu>
            <MenuItem><a href="https://google.com">記事一覧</a></MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>お問合せ</MenuItem>
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </>
  )
}

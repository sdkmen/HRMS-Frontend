import styled from "styled-components";

export const Menu = styled.div`
width: 300px;
height: 100vh;
background: #293241;
float: left;
text-align: center;
`

export const MenuTitle = styled.div`
color: #fff;
font-weight: bold;
font-size: 2rem;
margin-top: 300px;
.title{
  text-decoration: none;
  color: #fff;
  &:hover{
    color: #e8e8e8;
  }
}
`
export const MenuItemContainer = styled.div`
text-align: left;
width: 200px;
margin: 0 auto;
`

export const MenuItem = styled.div`
color: #fff;
font-size: 1.2rem;
margin-top: 20px;
.link{
  text-decoration: none;
  color: #fff;
  &:hover{
    color: #98c1d9;
  }
}
`
import styled from "styled-components";

export const FooterS = styled.div`
width: 100%;
color: #000;
background: #2b2d42;
text-align: center;
`

export const FooterLeft = styled.div`
width: 18rem;
color: #fefae0;
text-align: left;
.title {
  color: #9ebdde;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: .2rem;
}
`

export const FooterRight = styled.div`
width: 20rem;
text-align: left;
display: flex;
.p {
  width: 10rem;
  float:left;
  color: #f2e9e4;
  &:hover{
    color: #86b2df;
  }
}
`
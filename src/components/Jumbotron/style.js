import styled from "styled-components";
import interview from "../../assets/interview.jpg"

export const Jumbo = styled.div`
height: 895px;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-attachment: fixed;
background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${interview});
z-index: -2;
`

export const Title = styled.div`
color: #FFFFFF;
z-index: 1;
padding-top: 30vh;
`

export const ButtonGroup = styled.div`
.button{
  background-color: #f8f7f9;
  border:0px;
  font-weight: bold;
  &:hover {
    background-color: #7e6551;
    color: #f8f7f9;
    transition: .3s all ease-in-out;
  }
}
`
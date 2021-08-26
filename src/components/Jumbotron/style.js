import styled from "styled-components";
import interview from "../../assets/interview.jpg"

export const Jumbo = styled.div`
height: 865px;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-attachment: fixed;
background-image: linear-gradient(rgba(0, 0, 0, 0.827),rgba(0, 0, 0, 0.8)) , url(${interview});
z-index: -2;
`

export const Title = styled.div`
color: #FFFFFF;
z-index: 1;
padding-top: 30vh;
`

export const ButtonGroup = styled.div``
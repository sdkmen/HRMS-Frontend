import styled from "styled-components";
import interview from "../../assets/interview.jpg"

export const Jumbo = styled.div`
overflow-x: hidden;
align-items:center;
height: 92.4vh;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-attachment: fixed;
background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${interview});
z-index: -2;
.card {
  background-color: rgba(245, 245, 245, 0);
  width: 16rem;
  border-radius: 15px;
  border: 1px solid #ccc;
  &:hover {
    transform: scale(1.05);
    transition: .4s all ease-in-out;
  }
}
.card-title {
  color: #fff;
  font-weight: bold;
}
.card-text {
  color: #fff;
}
.button{
  background: #dfe3df;
  border-radius: 15px;
  height: 45px;
  border:0px;
  font-weight: bold;
  width: 8rem;
  color: #000;
  &:hover {
    background: #86b2df;
    color: #f8f7f9;
    transition: .2s all ease-in-out;
  }
`

export const Title = styled.div`
color: #FFFFFF;
z-index: 1;
margin-top: 24vh;
`
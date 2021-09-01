import styled from "styled-components";

export const Styles = styled.div`
.card{
  width: 18rem;
  border: 0px;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
  &:hover{
    transform: scale(1.07);
    transition: .3s all ease-in-out;
  }
}
.card-img{
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  border-radius: 50%;
  background: #ccc;
}
.card-title, .card-text {
  color: #fff;
  margin-top: -10px;
}
.button{
  background-color: #fff;
  border: 0px;
  color: #000;
  &:hover {
    color: #093028;
    font-weight:bold;
    transition: all .1s;
  }
}
`
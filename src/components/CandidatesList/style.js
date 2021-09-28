import styled from "styled-components";

export const Styles = styled.div`
.card{
  width: 14rem;
  border: 0px;
  border-radius: 7px;
  background-color: #42466e;
  &:hover{
    transform: scale(1.07);
    transition: .3s all ease-in-out;
  }
}
.card-img{
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  border-radius: 50%;
  background: #ccc;
}
.card-title {
  color: #fff;
  margin-top: -10px;
  font-size: 1rem;
  font-weight: bold;
}
.card-text {
  color: #fff;
  margin-top: -10px;
  font-size: 0.8rem;
}
.button{
  background-color: #fff;
  border: 0px;
  width: 6rem;
  font-size: 0.9rem;
  border-radius: 10px;
  color: #093028;
  font-weight:bold;
}
`
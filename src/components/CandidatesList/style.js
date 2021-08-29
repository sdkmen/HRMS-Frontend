import styled from "styled-components";

export const Styles = styled.div`
.card{
  width: 18rem;
  border: 0px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
  border: 1px solid #ccc;
}
.card-title {
  color: #023047;
}
.card-text {
  color: #264653;
}
`
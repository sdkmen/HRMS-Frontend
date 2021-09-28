import styled from "styled-components";

export const Styles = styled.div`
.h2 {
  color: #22223b;
  text-shadow: 2px 1px #ccc;
  letter-spacing: 0.3rem;
  font-family: 'Bebas Neue', cursive;
}
.card {
  border: 0px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: #474545;
}
.card-body {
  text-align: left;
}
.card-title{
  text-align: left;
  color: #4a4e69;
  font-weight: bold;
}
.card-text{
  color: #212529;
  font-weight: bold;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.free-position-no{
  min-width: 20px;
  text-align: center;
  color: #fff !important;
  background-color: #4a4e69;
  border-radius: 5px;
}
.city{
  color: #22223b;
  float: right;
  justify-content: center;
  line-height: 37px;
  text-align: center;
  font-size: 1.15rem;
  font-weight: bold;
}
.button {
  background-color: #284b63;
  color: #FFFFFF;
  border: 0px;
  border-radius: 5px;
  &:hover {
    background-color: #315d7a;
  }
}
.deadline{
  text-align: right;
  float: right;
  color: #a4a69d;
}
`
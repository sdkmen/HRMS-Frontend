import styled from "styled-components";

export const Styles = styled.div`
.card {
  width: 18rem;
  height: 260px;
  border-radius: 15px;
  border: 0px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-image: radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgba(182,199,226,1) 100.2% );
  &:hover{
    transform: scale(1.05);
    transition: all .3s ease-in-out;
    .card-text a{
      color: #0082c8;
    }
  }
}
.card-img{
  height: 6rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.card-title{
  margin-top: -70px;
  color: #fff;
  font-size: 2.1rem;
}
.card-text {
  text-align: left;
  font-weight: bold;
  color: #000;
}
.link {
  margin-top:60px;
}
.card-text a{
  text-decoration: none;
  color: #000;
}
`
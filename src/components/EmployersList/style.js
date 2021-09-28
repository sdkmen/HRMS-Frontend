import styled from "styled-components";

export const Styles = styled.div`
.card {
  position: relative;
  width: 30rem;
  height: 80px;
  border-radius: 5px;
  border: 0px;
  background-color: #3a405a;
  &:hover{
    transform: scale(1.02);
    transition: all .3s ease-in-out;
    .card-text a{
      color: #90e0ef;
    }
  }
}
.card-img{
  height: 6rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.card-title{
  font-weight: bold;
  color: #fff;
  height: 100px;
  text-align: left;
  float: left;
  margin: 15px 0 0 10px;
  font-size: 1.3rem;
}
.card-text {
  margin: 3px 0 0 180px;
  font-size: 0.9rem;
  text-align: left;
  color: #fff;
}
.link{
  margin-top: -1px;
}
.card-text a{
  text-decoration: none;
  color: #fff;
}
.divider{
  position: absolute;
  width: 2px;
  background: #fff;
  height: 80px;
  float: left;
  left: 160px;
  top: 0px;
}
`
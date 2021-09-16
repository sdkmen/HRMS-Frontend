import styled from "styled-components";

export const Styles = styled.div`
.h2 {
  color: #1b3754;
}
.card {
  border: 0px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  color: #474545;
}
.card-body, .card-title {
  text-align: left;
}
.card-header {
  background-color: #0c7489;
  text-align: left;
  color: #FFFFFF;
}
.card-text{
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.button {
  background-color: #2f5c8a;
  color: #FFFFFF;
  border: 0px;
  border-radius: 10px;
  &:hover {
    background-color: #366ca3;
  }
}
.deadline{
  text-align: right;
  float: right;
  color: #a4a69d;
}
`
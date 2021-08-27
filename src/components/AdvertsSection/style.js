import styled from "styled-components";

export const Styles = styled.div`
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
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.button {
  background-color: #0c7489;
  color: #FFFFFF;
  border: 0px;
  &:hover {
    background-color: #119da4;
  }
}
.deadline{
  text-align: right;
  float: right;
  color: #a4a69d;
}
`
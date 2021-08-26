import styled from "styled-components";

export const Styles = styled.div`
.navbar-brand {
  color: #F6F3EE;
  font-weight: bold;
  font-size: 2rem;
  &:hover{
    color: #F6F3EE;
  }
}
.nav-link {
  color: #F6F3EE !important;
  font-weight: bold;
  &:hover {
    color: #dda15e !important;
  }
}
.navbar {
  background-color: #2b2d42;
}
.navbar-toggle {
  border: 0px;
  background-color: #FFFFFF; 
}
.button{
  background-color: #f8f7f9;
  color: #3b3e40;
  font-weight: bold;
  border: 0px;
  border-radius: 7px;
  &:hover{
    background-color: #dda15e;
    color: #fefae0;
    transition: .5s all ease-in-out;
  }
}
`
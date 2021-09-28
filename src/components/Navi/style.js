import styled from "styled-components";
import menu from "../../assets/menu.png"

export const Styles = styled.div`
text-align: left !important;
.navbar-brand {
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  &:hover{
    color: #fff !important;
  }
}
.nav-link {
  color: #F6F3EE !important;
  font-weight: bold;
  &:hover {
    color: #86b2df !important;
  }
}
.navbar {
  background-color: #2b2d42;
}
.navbar-toggle {
  border: 0px;
  background-color: #2b2d42; 
}
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
}
.navbar-toggler-icon{
  background-image: url(${menu});
}
.button{
  background-color: #f8f7f9;
  color: #3b3e40;
  font-weight: bold;
  border: 0px;
  border-radius: 7px;
  &:hover{
    background: #86b2df;
    color: #fefae0;
    transition: .5s all ease-in-out;
  }
}
`
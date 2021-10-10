import styled from "styled-components";

export const Styles = styled.div`
.card{
  max-width: 50rem;
  min-height: 55rem;
  background: #fff;
  border-radius: 3px;
  border: 0px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.divider-horizontal{
  margin-top: 20px;
  border-bottom: 2px solid #4a4e69;
}
.company-container{
  width: 18rem;
  height: 100px;
  margin-top: 30px;
  text-align: center;
}
.company{
  color: #4a4e69;
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  margin-left: 2px;
}
.first-letter{
  background-color: #22223b;
  color: #fff;
  justify-content: center;
  line-height: 38px;
  text-align: center;
  width: 40px;
  height: 40px;
  font-size: 2rem;
  border-radius: 10px;
  font-weight: bold;
  display: inline-block;
}
.free-position{
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a4e69;
  margin-top: 80px;
}
.free-position-no{
  min-width: 30px;
  text-align: center;
  color: #fff !important;
  background-color: #4a4e69;
  border-radius: 5px;
  display: inline-block;
}
.city {
  display: inline-block;
  text-align: right;
  float:right;
  margin-top: 80px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a4e69;
}
.salary{
  width: 140px;
  height: 30px;
  background-color: #495057;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  float: left;
}
.salary p{
  line-height: 30px;
  text-align:center;
  color: #fff;
}
.money{
  color: #1bd177;
}
.card-title {
  color: #4a4e69;
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
}
.card-text {
  color: #4a4e69;
  text-align: left;
}
.description {
  width: 100%;
  color: #495057;
  font-size: 1.1rem;
  font-weight: bold;
 }
.description p{
  color: #4a4e69;
  font-size: 1.5rem;
  font-weight: bold;
}
.deadline{
  text-align: right;
  color: #495057;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top:58px;
}
`
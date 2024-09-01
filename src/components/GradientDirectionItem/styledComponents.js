// Style your elements here
import styled from 'styled-components'

export const DirectionItem = styled.li`
  background-color:white;
  width:100%;
  border-radius:10px;
  opacity:${props => (props.addstyle === true ? '1' : '0.5')};
  cursor:pointer;
  border:none;
  padding:10px 15px;
`
export const ListItem = styled.li`
  list-style-type:none;
  width:40%;
  margin:5px;
  @media screen and (min-width:786px){
    width:12%;
    }`

export const Direction = styled.p`
  color:#014f7b;
  font-weight:bold;
  margin:3px;
  text-align:center;
`

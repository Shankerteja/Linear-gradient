import styled from 'styled-components'

export const AppContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    min-height:100vh;
    background-image:linear-gradient( to ${props => props.direction},${props =>
      props.firstColor},${props => props.secondColor})

`
export const Heading = styled.h1`
    font-family:'Roboto';
    font-size:23px;
    color:white;
    @media screen and (min-width:786px){
        font-size:35px;
    }
`
export const Para = styled.p`
    color:white;
    font-family:'Roboto';
    @media screen and (min-width:786px){
        font-size:20px;
    }
    

`
export const List = styled.ul`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-left:0px;
    width:100%;
    flex-wrap:wrap;
    @media screen and (min-width:786px){
        flex-wrap:nowrap;
    }
`
export const ColorsInputContainer = styled.div`
    display:flex;
    justify-content:center;
    

`
export const ColorInputContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    @media screen and (min-width:786px){
        margin-right:50px;
    }

`
export const ColorCode = styled.p`
    color:white;
    font-family:'Roboto';
    font-weight:bold;`

export const InputColor = styled.input`
    border-color:'transparent';
    margin:4px;
    width:80px;
    height:40px;
    background-color:none;
    border-width:0px;
    padding:0px 0px;
    cursor:pointer;
    @media screen and (min-width:786px){
        width:150px;
    }`

export const GenerateButton = styled.button`
    color:black;
    background-color:#00c9b7;
    padding:10px 30px;
    border:none;
    border-radius:10px;
    margin-top:25px;
    cursor:pointer;
    outline:none;
    font-weight:bold;`

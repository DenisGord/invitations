import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  uri: string
  size?: string
  justifyContent: string
}

export const ImgLoaderStyle = styled.div<Props>(({ uri, size, justifyContent }) => `
max-width:100vw;
height:100vh;
background-image: url(${uri});
background-position: center center;
background-repeat: no-repeat;
background-size:cover;
display:flex;
align-items:center;
justify-content: ${justifyContent};
color:white;
flex-direction:column;
h1{
    font-size: ${size}; 
  } 
`)

export const WhiteBackground = styled.div(() => css`
width:99vw;
height:60vh;
background-image: url('/../../static/images/white.png');
background-position: center center;
background-repeat: no-repeat;
background-size:cover;
display:flex;
align-items:center;
justify-content:flex-end;
color:black;
flex-direction:column;

@media only screen and (max-width: 600px) {
    max-width:100vw;
  }
 

`)

export const RectangleStyled = styled.div`
  width:75%;
  min-height: 70vh;
  background: white;
  color:black;
  padding:20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
  opacity:0.85;

  h1{
    font-size:60px;
    position: relative;
    border-bottom: 1px solid black;
  }

  a{
    color:gray;
    text-decoration:none;
    border-bottom: 1px solid gray;
  }

  .long-text{
    font-size:24px;
  }

`
export const DeatGuestStyled = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  flex-direction:column;
  text-aligin:center;
  height:100%;
  padding-top:30px;
  h2{
    color:black;
    text-align:center;
  }

`

export const FlexConteiner = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  text-align:center;

  button{
    background:white;
    border:1px solid black;
    outline: none;
    border-radius:10px;
    font-family:"MyFonts";
    width:48%;
    padding:10px;
    font-size:15px;
  }
  a{
    font-size:20px
  }
`
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
background-image: url('https://4.downloader.disk.yandex.ru/preview/82acc0aa9a21acd4f140895f7c23e8913414cbc82db182304b8b9001d01b1b7c/inf/M_k4FcaOhzgOgBlMzRo-DwJVoHCir8vPR_Z_7W_6YOmO4bGPtBfZ8jVS2aBXzMDV8_Pyo5y2Fcmyjw1qU9xgPg%3D%3D?uid=610905121&filename=1645743356_3-abrakadabra-fun-p-rvanii-krai-4.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=610905121&tknv=v2&size=1835x966');
background-position: center center;
background-repeat: no-repeat;
background-size:cover;
display:flex;
align-items:center;
justify-content:flex-end;
color:black;
flex-direction:column;

@keyframes move{
    from{
        opacity:0;
        margin-left:-200px;
    }
    to{
        opacity:1;
        margin-left:10px;
    }
}

@keyframes moveAnd{
    from{
        opacity:0;
        margin-left: 200px;
    }
    to{
        opacity:1;
        margin-left:0;
    }
}



h1{
    animation-direction: alternate;
	animation-duration: 2s;
	animation-name: moveAnd;
	animation-iteration-count: 1;
	animation-timing-function: linear;
  }

  h2{
    animation-direction: alternate;
	animation-duration: 2s;
	animation-name: move;
	animation-iteration-count: 1;
	animation-timing-function: linear;
  }

@media only screen and (max-width: 600px) {
    max-width:100vw;
  }
 

`)

export const RectangleStyled = styled.div`
  width:75%;
  height: 70vh;
  background: white;
  color:black;
  padding:20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;

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
`
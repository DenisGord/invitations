import styled from "@emotion/styled";

export const ProgramStyle = styled.div`
    width:100vw;
    min-height:calc(100vh - 40px);
    padding:20px 0px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    text-align:center;
    h1{
        font-size:80px;
    }
    h2{
        font-size:60px;
        font-weight:100;
        font-family:"Crimson", sans-serif;
        color:gray;
        border-bottom:1px solid gray;
    }
    span{
        line-height:1.2;
    }
  
`
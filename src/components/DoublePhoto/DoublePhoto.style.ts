import styled from "@emotion/styled";

export const DoublePhotoStyle = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    max-width:100%;
    padding-bottom:20px;
    margin-top:-25%;
    img{
        width:40%;
        height:200px;
        filter: grayscale(1);
        object-fit:cover;
    }
`

export const SecondPhoto = styled.img`
    margin-top:50%;
    margin-left:-5%;
`
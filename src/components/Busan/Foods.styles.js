import styled from "styled-components";
export const StyledWrap = styled.div`
    width: 1200px;
    height: auto;
    min-height: 1200px;
    margin: auto;
    margin-top : 30px;
    margin-bottom: 30px;
    border: 1px solid #aedbed;
    box-shadow : 0 0 1px 2px rgba(0,0,0,0.2);

`;

export const StyledTitle = styled.h1`
    font-size : 60px;
    font-weight : 800px;
    color : gray;
    text-align: center;
    margin: 65px 0px;
`;

export const StyledInnerWrap = styled.div`
    width: 1100px;
    margin : auto;
    height :auto;
    min-height: 800px;
    padding: 12px;
    border : 1px solid rgba(0,0,0,0.1);
    border-radius: 1px;
`;

export const StyledCard = styled.div`
    width: 330px;
    height: 250px;
    margin: 9px 9px;
    padding 5px;
    box-shadow : 1px 1px 1px 1px rgba(0,0,0,0.2);
    display: inline-block;
    
    &:hover{
        cursor:pointer;
        box-showdow:1px 1px 1px 1px rgba(0,0,0,0.4);
        opacity:0.9;
    }

`;

export const StyledImg = styled.img`
    width : 330px;
    height : 180px;
`;

export const StyledStoreName = styled.h3`
    font-weight : bold;
    text-align : center;
    font-size : 17px;
    margin : 15px;
`;

export const StyledMoreButton = styled.div`
    width : 150px;
    height : 40px;
    line-height:40px;
    text-align:center;
    margin : auto;
    border-radius: 22px;
    background-color :  #aedbed;
    color : white;
    font-weight: 900;
    border : 2px dotted skyblue;
    margin-top: 35px;
    font-szie: 18px

    &:hover{
        cursor:pointer;
        background-color:white;
        color: #aedbed;
        
    }

`;
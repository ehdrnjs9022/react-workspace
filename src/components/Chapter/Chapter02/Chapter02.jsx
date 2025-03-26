// AJAX 요청을 보내서 응답을 받아올 것
// 요번 타임 주제 => 유저정보 ==> 회원들의 정보
import styled from "styled-components";

const StyledDiv = styled.div`

    width:400px;
    height:140px;
    boder-box: 1px solid black;
    display :inline-block;
    margin: auto;
`;

const MemberInfo = (props) => {
    console.log(props);
    return(
    <>
        <StyledDiv>
            <h4>아이디 : </h4>
            <strong>이름 : </strong>
            <p>이메일 : </p>

        </StyledDiv>

    </>

    )
}


const Chapter02 = () => {
    const response = [{
        memberId : "admin",
        memberName :"짱구",
        email: "jjang9@kh.com",
    },
    {
        memberId : "user01",
        memberName :"철수",
        email: "abc@kh.com",
    },
    {
        memberId : "user02",
        memberName :"유리",
        email: "glass@kh.com",
    },
];



    return(
        <>
            <MemberInfo member={response[0]}/>
           


        {/*  1절
            <styledDiv>
                <h4>아이디 : {response[0].memberId}</h4>
                <strong>이름 : {response[0].memberName}</strong>
                <p>이메일 : {response[0].email}</p>
            </styledDiv>
            <styledDiv>
                <h4>아이디 : {response[1].memberId}</h4>
                <strong>이름 : {response[1].memberName}</strong>
                <p>이메일 : {response[1].email}</p>
             </styledDiv>  
            <styledDiv>        
                <h4>아이디 : {response[2].memberId}</h4>
                <strong>이름 : {response[2].memberName}</strong>
                <p>이메일 : {response[2].email}</p>
            </styledDiv> */}

        </>
    );
};

export default Chapter02;
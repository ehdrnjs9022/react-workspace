import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import { StyledWrap,StyledTitle, StyledMoreButton } from "../Foods.styles";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import CommentList from "../Comment/CommentList";


const StyledMainImg = styled.img`
    width : 100%;
    height : 550px;
`;

const StyledDescription = styled.div`
    font-size : 20px;
    font-weight: bold;
    margin : 30px 0px;
`;

const StyledOther = styled.div`
    font-size : 18px;
    text-align : center;
    margin : 15px 0px;

`;

const StyledMap = styled.div`
    width : 50%;
    height:600px;
    margin: auto;
    border : 1px solid rgba(0,0,0,0.1);
    border-radious : 16px;
    box
`;

const FoodDetail = () => {
    const {id} = useParams();
    const [load, isLoad] = useState(true)
   // alert(id);
    const [food, sefFood] = useState({
        title : "",
        img : "",
        description : "",
        usageTime : "",
        address : "",
        lat : "",
        lng : "",
    });

    const [content, setContent] = useState("");
    const [success,  isSuccess] = useState(false);

   useEffect(() => {

    axios
    .get(`http://localhost/busans/${id}`)
    .then((result) => {
       // console.log(result); => 전부가져온값이 보여짐
        const response = result.data.getFoodKr.item[0];
       //console.log(response);  => 내가 담은것만 콘솔창에 보여짐
        sefFood({
        title : response.MAIN_TITLE,
        img : response.MAIN_IMG_NORMAL,
        description : response.ITEMCNTNTS,
        usageTime : response.USAGE_DAY_WEEK_AND_TIME,
        address : response.ADDR1,
        lat : response.LAT,
        lng : response.LNG,
        });

        isLoad(true);

        // 1. MAIN_TITLE               : 메인타이틀
        // 2. MAIN_IMG_NORMAL          : 이미지
        // 3. ITEMCNTNTS               : 소개글
        // 4. USAGE_DAY_WEEK_AND_TIME  : 운영시간
        // 5. ADDR1                    : 주소
        // 6. LAT                      : 위도
        // 7. LNG                      : 경도
    if(food.lat){
        var marker = {
            position: new window.kakao.maps.LatLng(response.LAT, response.LNG), 
            text: '텍스트를 표시할 수 있어요!' // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다
        };
        
        var staticMapContainer  = document.getElementById('map'), // 이미지 지도를 표시할 div
            staticMapOption = { 
                center: new window.kakao.maps.LatLng(response.LAT, response.LNG), // 이미지 지도의 중심좌표
                level: 3, // 이미지 지도의 확대 레벨
                marker: marker // 이미지 지도에 표시할 마커
            };
        
        // 이미지 지도를 생성합니다
        var staticMap = new window.kakao.maps.StaticMap(staticMapContainer, staticMapOption);
    } 
    }); 
   
   }, [food.lat, load]);



   const submitHandler = (e) => {
    e.preventDefault();

        if(content.trim() === ""){
        alert(' 내용을 입력해주세요 !');
        return;
        }
//요청 url,입력값, 식당번호
  
        axios
        .post(`http://localhost/busans/comments`,{ 
            seq:id,
            content: content,   
        }).then((result) => {
           // console.log(result);
           setContent("");
           isSuccess(!success);
        });
    }


   const contentHandler = e => {
    setContent(e.target.value);
   }

   

   if(!load){
    return <StyledWrap>
        <StyledTitle>음식점을 조회 중입니다...</StyledTitle>
    </StyledWrap>
   }
    
   const navi = useNavigate();



    return(
        <>
            <StyledWrap>
                <StyledTitle>{food.title}</StyledTitle>
                <StyledMainImg src = {food.img}></StyledMainImg>
                <StyledDescription>{food.description}</StyledDescription>
                <StyledOther>{food.address}</StyledOther>
                <StyledOther>{food.usageTime}</StyledOther>
                <StyledMap id="map"></StyledMap>
                <StyledMoreButton onClick={() => navi(-1)}>뒤로가기</StyledMoreButton>


            </StyledWrap>
            <div style={{ width: "200px", margin: "auto", height: "600px"}}>
                
            <form onSubmit={submitHandler}>
                <input type="text" onChange={contentHandler}
                placeholder="후기를 작성해주세요" 
                value={content}/>
                <button>후기 남기기!</button>
            </form>
            </div>
            <CommentList id={id} success={success}/>
        </>
    )
}
export default FoodDetail;
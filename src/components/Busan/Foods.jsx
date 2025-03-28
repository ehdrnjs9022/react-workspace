
import {useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { StyledTitle,
        StyledCard,
        StyledImg,
        StyledInnerWrap
        ,StyledWrap,
        StyledMoreButton,
        StyledStoreName 
        } from "./Foods.styles";


const Foods = () => {

    const [pageNo, setPageNo] = useState(1);
    const [foods, setFoods] = useState([]);
    const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지 없는지

    const navi = useNavigate();




    useEffect(() => {
        /* 방법1
        fetch(`http://localhost/spring/busans?pageNo=${pageNo}`)
        .then(response => response.json())
        .then(date => console.log(data))
        .catch(err => console.error("문제발생 ", err))
        .finally(console.log("무조건함"));
        */

        /*  방법2
            axios({
            url : `http://localhost/spring/busans?pageNo=${pageNo}`,
            method : 'get'
        }).then(result => console.log(result));
         */

        axios
        .get(`http://localhost/busans?pageNo=${pageNo}`)
        .then(result => {
           //console.log("결과잘오나");
            //console.log(result);
            const response = result.data.getFoodKr.item;
            //console.log(response);

            setFoods([...foods, ...response]);
            if(response.length <9 ){
                setHasMore(false);
            }

        });
    }, [pageNo]);
    
    const clickToButtonBandler = () => {
        setPageNo(pageNo => pageNo +1 );
    };

    return(
        <>
            <StyledWrap>
                <StyledTitle>부산의 맛집 알아보기</StyledTitle>
                    <StyledInnerWrap>
                       {
                            foods.length === 0 ? (
                            <h3>음식점 목록을 불러오는 중입니다.</h3>
                            ):(
                            foods.map((e) =>( 
                                <StyledCard key={e.UC_SEQ} onClick={() => navi(`/foods/${e.UC_SEQ}`)}>
                                    <StyledImg src ={e.MAIN_IMG_THUMB}></StyledImg>
                                    <StyledStoreName>{e.MAIN_TITLE}</StyledStoreName>
                                </StyledCard>
                            ))
                        )}
                       
                </StyledInnerWrap>
               {hasMore && (
            <StyledMoreButton onClick={clickToButtonBandler}>
                더보기 
                </StyledMoreButton>
            )}
            </StyledWrap>                
             
        </>
    );

};

export default Foods;
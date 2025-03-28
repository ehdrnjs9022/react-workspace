import { MainContent } from "./Common.styles";
import { useNavigate } from "react-router-dom";


const Main =  () => {
    const navi = useNavigate();



    // <abc onClick={() => navi ("/chap1")}>home</abc>


    return(
        <>
        <nav>
            <a href="/chap01">Chapter01 </a>
                | <a href="/chap02">Chapter02 </a>
                | <a href="/chap03">Chapter03 </a>
                | <a href="/input">Chapter03Input </a>
                | <a href="/input2">Chapter03B </a>
                | <a href="/memo">Memo </a>
                | <a href="/Foods">부산맛집보기 </a>
        </nav>
        </>

    );

};

export default Main;
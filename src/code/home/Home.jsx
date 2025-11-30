import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "../css/Home.css";

function Home() {
    // 페이지 이동 감시 state
    const [page, setPage] = useState(null);

    // useNavigate: 특정 상황에서 url을 변경하여 페이지 이동 시켜준다.
    const navigate = useNavigate();

    const move = (path) => {
        navigate(path);
    };

    return (
        <div className="main-container">
            <div className="main-intro">
                <h1>모그리지에 오신 것을 환영합니다!</h1>
                <p>모그리지는 이런 분들께 추천 드립니다.</p>
                <ul>
                    <li>펜을 들어도 뭘 그려야 할 지 막막하신 분들</li>
                    <li>그림 창작에 어려움을 겪으시는 분들</li>
                    <li>그림쟁이에게 유용한 기능들이 한 곳에 모인 사이트를 찾고 계신 분들</li>
                </ul>
            </div>

            {/*<div className={"content-title"}>*/}
            {/*    <h1>모그리지가 제공하는 다양한 기능들</h1>*/}
            {/*</div>*/}

            <div className={"main-content-container"}>
                {/* html 처럼 그냥 onClick=move()라고 쓰면 무한 루프가 발생한다. 버튼 누름 여부와 관계없이 브라우저가 실행해야 하는 메소드로 인식하기 때문이다.*/}
                <div className={"content-box"} onClick={() => move("/croquis")}>
                    <div className={"image"}>
                        이미지 영역
                    </div>
                    <div className={"title"}>
                        <h1>크로키 연습 페이지로 이동</h1>
                    </div>
                    <div className={"content"}>
                        워밍업 & 손그림 연습
                    </div>
                </div>

                <div className={"content-box"} onClick={() => move("/Keywords")}>
                    <div className={"image"}>
                        이미지 영역
                    </div>
                    <div className={"title"}>
                        <h1>키워드 추천 페이지로 이동</h1>
                    </div>
                    <div className={"content"}>

                    </div>
                </div>

                <div className={"content-box"} onClick={() => move("/Pallete")}>
                    <div className={"image"}>
                        이미지 영역
                    </div>
                    <div className={"title"}>
                        <h1>색상 추천 페이지로 이동</h1>
                    </div>
                    <div className={"content"}>
                        채색이 어려운 자 나에게로...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
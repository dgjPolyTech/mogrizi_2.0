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
            <h1>모그리지에 오신 것을 환영합니다!</h1>
            <p>펜은 들었는데 그릴 게 생각나지 않을 때, 모그리지를 이용하세요.</p>

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
                        손그림 연습엔 크로키가 제격
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
                        본인이 채색 고자라면 들어오세요.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const goToCroquis = () => {
        navigate("/croquis/croquis");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>모그리지에 오신 것을 환영합니다!</h1>
            <p>펜은 들었는데 그릴 게 생각나지 않을 때, 모그리지를 이용하세요.</p>

            <ul style={{ marginTop: "30px" }}>
                <li style={{ marginBottom: "10px" }}>
                    <button onClick={goToCroquis}>
                        크로키 연습하러 가기 👉
                    </button>
                </li>

                <li>
                    <button onClick={() => alert("아직 준비 중이에요!")}>
                        캐릭터 색조합 추천 (준비중)
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Home;
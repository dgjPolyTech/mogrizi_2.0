import React, {useState} from "react";
import Croquis_view from "./Croquis_view";
import "../css/Croquis.css";

function Croquis(){
    const [category, setCategory] = useState("all");
    const [time, setTime] = useState("");
    const [isStart, setIsStart] = useState(false);
    const [difficult, setDifficult] = useState(1);

    const handleTimeChange = (event) => {
        let value = event.target.value;
        if (!/^\d*$/.test(value)) {
            alert("숫자값을 입력해주십시오.");
            return;
        }
        if (Number(value) > 6000) {
            alert("최대 6000초(100분)까지 가능합니다.");
            return;
        }
        setTime(value);
    };

    const handleOptionChange = (event) => {
        setCategory(event.target.value);
    };


    const handleDifficultChange = (event) => {
        setDifficult(Number(event.target.value));
    };


    const handleStart = (event) => {
        event.preventDefault(); // 새로고침 방지

        if(time === "" || Number(time) <= 0){
            alert("시간을 올바르게 입력해주십시오.");
            return;
        }

        setIsStart(true);
    };

    const handleStop = () => {
        setIsStart(false);
    };

    return(
        <div className="croquis-container">
            <div className="croquis-title">
                <h1>크로키 연습 페이지</h1>
                <p>원하는 카테고리, 원하는 간격, 원하는 주제로 연습하세요.</p>
            </div>

            <form onSubmit={handleStart}>
                <div className="croquis-menus">
                    <ul>
                        <li>
                            주제 설정:
                            <select
                                value={category}
                                onChange={handleOptionChange}
                                disabled={isStart}
                            >
                                <option value="all">전체(랜덤)</option>
                                <option value="sports">스포츠</option>
                                <option value="casual">캐쥬얼</option>
                                <option value="action">액션</option>
                            </select>
                        </li>
                        <li>
                            시간 설정(초):
                            <input
                                placeholder="최대: 6000초(100분)"
                                onChange={handleTimeChange}
                                value={time}
                                disabled={isStart}
                            />
                        </li>
                        <li>
                            <div className="croquis-radio-group">
                                난이도 설정 (* 높을수록 어려운 자세):
                                <div>
                                    <label>
                                        <span>동손</span>
                                        <input
                                            type="radio" name="difficult" value={1}
                                            checked={difficult === 1}
                                            onChange={handleDifficultChange}
                                            disabled={isStart} /* ⭐ 비활성화 */
                                        />
                                    </label>

                                    <label>
                                        <span>은손</span>
                                        <input
                                            type="radio" name="difficult" value={2}
                                            checked={difficult === 2}
                                            onChange={handleDifficultChange}
                                            disabled={isStart}
                                        />
                                    </label>

                                    <label>
                                        <span>금손</span>
                                        <input
                                            type="radio" name="difficult" value={3}
                                            checked={difficult === 3}
                                            onChange={handleDifficultChange}
                                            disabled={isStart}
                                        />
                                    </label>

                                    <label>
                                        <span>완전 무작위</span>
                                        <input
                                            type="radio" name="difficult" value={0}
                                            checked={difficult === 0}
                                            onChange={handleDifficultChange}
                                            disabled={isStart}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>

                    {/* 시작 버튼 (시작 중엔 회색으로 변함) */}
                    <button type="submit" disabled={isStart}>
                        {isStart ? "진행 중..." : "START"}
                    </button>
                </div>
            </form>

            {/* 게임 화면 (isStart가 true일 때만 보임) */}
            {isStart &&
                <div className="croquis-view-container">
                    <Croquis_view
                        category={category}
                        time={Number(time) * 1000} // 밀리초 변환
                        difficult={difficult}
                        onStop={handleStop}
                    />
                </div>
            }
        </div>
    );
}

export default Croquis;
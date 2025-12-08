import React, {useState} from "react";
import Croquis_view from "./Croquis_view";
import "../css/Croquis.css";

function Croquis(){
    // croquis_view에게 보내야 할 사용자가 선택한 주제, 입력한 시간, 시작 여부, 난이도 값을 useState로 정의.
    const [category, setCategory] = useState("all");
    const [time, setTime] = useState("");
    const [isStart, setIsStart] = useState(false);
    const [difficult, setDifficult] = useState(1);

    // 시간 변경 시마다, time state 값을 변경함.
    const handleTimeChange = (event) => {
        let value = event.target.value;

        if (Number(value) > 6000) {
            alert("최대 6000초(100분)까지 가능합니다.");
            return;
        }
        setTime(value);
    };

    // selectBox에서 옵션 변경 시마다 category 변경
    const handleOptionChange = (event) => {
        setCategory(event.target.value);
    };

    // 라디오 버튼으로 다른 거 선택할 때마다 difficult 변경
    const handleDifficultChange = (event) => {
        setDifficult(Number(event.target.value));
    };

    // start 버튼 눌렀을 시 발동.
    const handleStart = (event) => {
        event.preventDefault(); // 새로고침 방지.

        // 시간 설정은 사용자가 선택하는게 아니라 입력하는 값이기에 유효성 검사를 진행함.
        if(time === "" || Number(time) <= 0){
            alert("시간을 올바르게 입력해주십시오.");
            return;
        }

        if (!/^\d*$/.test(time)) {
            alert("시간을 올바르게 입력해주십시오.");
            return;
        }

        // isStart true로 만듦과 동시에, 요소별 disabled 값에 영향을 줘서 크로키 진행 중에는 입력 추가로 못하게 방지함.
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
                                            disabled={isStart}
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

            {/* croquis_view 영역은 isStart가 true일 떄만(=크로키 진행 중일 때만) 보이게 설정함. */}
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
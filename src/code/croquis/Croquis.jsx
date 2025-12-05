import React, {useState} from "react";
import Croquis_view from "./Croquis_view";

import "../css/Croquis.css";

function Croquis(){
    const [category, setCategory] = useState("all"); // 카테고리 (기본: 전체)
    const [time, setTime] = useState("");  // 입력된 시간 문자열
    const [isStart, setIsStart] = useState(false); // 시작 여부(모든 state 값이 들어가 있어야 시작)
    const [difficult, setDifficult] = useState(1);

    // 시간 설정 이벤트 핸들러
    const handleTimeChange = (event) => {
        let value = event.target.value;

        // 숫자만 입력 하도록 유효성 검사
        if (!/^\d*$/.test(value)) {
            alert("숫자값을 입력해주십시오.");
            return;
        }

        // 6000초 제한
        if (Number(value) > 6000) {
            alert("최대 6000초(100분)까지 가능합니다.");
            return;
        }

        setTime(value);
    };
    
    // 주제 체인지 이벤트 핸들러
    const handleOptionChange = (event) => {
        let value = event.target.value;
        alert("체크박스 "+value);
        setCategory(value);
    };
    
    // 난이도 체인지 이벤트 핸들러
    const handleDifficultChange = (event) => {
        let value = event.target.value;
        setDifficult(Number(value));
    };

    const handleStart = (event) => {
        // handleStart 발동시마다 페이지 다시 돌아가지 않게 함.
        event.preventDefault()

        if(time == ""){
            alert("시간을 입력해주십시오.")
            return;
        } else {
            // 숫자만 입력 하도록 유효성 검사
            if (!/^\d*$/.test(time)) {
                alert("숫자값을 입력해주십시오.");
                return;
            }

            // 6000초 제한
            if (Number(time) > 6000) {
                alert("최대 6000초(100분)까지 가능합니다.");
                return;
            }
        }
        setIsStart(true)// 시작 여부(모든 state 값이 들어가 있어야 시작)
    };

    return(
        <div className={"main-container"}>
            <div className={"title"}>
                <h1>크로키 연습 페이지</h1>
                원하는 카테고리, 원하는 간격, 원하는 주제로 연습하세요.
            </div>

            <form onSubmit={handleStart}>
                <div className={"menus"}>
                    <ul>
                        <li>
                            주제 설정:
                            <select value={category} onChange={handleOptionChange}>
                                <option value={"all"}>전체(랜덤)</option>
                                <option value={"sports"}>스포츠</option>
                                <option value={"casual"}>캐쥬얼</option>
                                <option value={"action"}>액션</option>
                            </select>
                        </li>
                        <li>
                            시간 설정(초): <input
                            placeholder={"최대: 6000초(100분)"}
                            onChange={handleTimeChange}
                            value={time}
                        />
                        </li>
                        <li>
                            난이도 설정(* 높을 수록 더 어려운 자세의 이미지가 등장합니다!)
                            <br/>
                            <label>
                                동손
                                <input type={"radio"} name={"difficult"} value={1}
                                       checked={difficult == 1} onChange={handleDifficultChange} />
                            </label>

                            <label>
                                은손
                                <input type={"radio"} name={"difficult"} value={2}
                                       checked={difficult == 2} onChange={handleDifficultChange} />
                            </label>

                            <label>
                                금손
                                <input type={"radio"} name={"difficult"} value={3}
                                       checked={difficult == 3} onChange={handleDifficultChange} />
                            </label>

                            <br/>
                            <label>
                                <input
                                    type={"radio"}
                                    name={"difficult"}
                                    value={0}
                                    checked={difficult == 0}
                                    onChange={handleDifficultChange}
                                />
                                완전 무작위(난이도 상관없이 이미지 출력)
                            </label>
                        </li>
                    </ul>
                    <button>START</button>
                </div>
            </form>

            {isStart &&
                <div className={"content"}>
                    <Croquis_view
                        category={category}
                        time={time * 1000} // 밀리초 단위로 변환하여 보냄
                        difficult={difficult}
                    />
                </div>
            }
        </div>
    );
}

export default Croquis;
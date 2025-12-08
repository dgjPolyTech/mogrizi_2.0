import React, {useState, useEffect, useCallback} from "react";

// require.context는 컴포넌트 밖에서 선언
const imgContext = require.context("../assets", true, /\.png$/);

function Croquis_view(props){
    const [currImg, setCurrImg] = useState("");
    const [timeLeft, setTimeLeft] = useState(props.time / 1000);
    const [isPaused, setIsPaused] = useState(false);

    // 이미지 변경 함수
    const change_img = useCallback(() => {
        const allKeys = imgContext.keys();
        

        const validKeys = allKeys.filter((path) => {
    
            const isCategoryMatch = props.category === 'all' || path.includes(props.category);

            // 2. 난이도 체크 (윈도우/맥 호환성 강화)
            const diffPattern = new RegExp(`[\\/\\\\]${props.difficult}_|^${props.difficult}_`);
            const isDiffMatch = props.difficult === 0 || diffPattern.test(path);

            return isCategoryMatch && isDiffMatch;
        });
        
        if (validKeys.length === 0) {
            console.warn("이미지를 찾을 수 없습니다.");
            return;
        }

        const randomIdx = Math.floor(Math.random() * validKeys.length);
        const selectedKey = validKeys[randomIdx];

        // 이미지 데이터 가져오기 (.default 처리)
        const imageModule = imgContext(selectedKey);
        const imagePath = imageModule.default || imageModule;

        setCurrImg(imagePath);
        setTimeLeft(props.time / 1000); // 시간 리셋
    }, [props.category, props.difficult, props.time]);

    // 타이머 가동 함수
    useEffect(() => {
        if (!currImg) change_img();

        if (isPaused) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    change_img();
                    return props.time / 1000;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);

    }, [isPaused, change_img, props.time, currImg]); 

    const handlePauseToggle = () => setIsPaused(!isPaused);
    const handlePass = () => change_img();

    return (
        <div className="croquis-view-container">
            <div className="croquis-view-box">
                {/* 타이머 표시 */}
                {currImg && <div className="timer-display">{timeLeft} 초</div>}

                {currImg ? (
                    <img src={currImg} alt="크로키 자료" />
                ) : (
                    <p>이미지 로딩 중...</p>
                )}
            </div>

            <div className="croquis-button-group">
                <button className={isPaused ? "btn-resume" : "btn-pause"} onClick={handlePauseToggle}>
                    {isPaused ? "재개 ▶️" : "일시정지 ⏸️"}
                </button>
                <button className="btn-stop" onClick={props.onStop}>종료 ⏹️</button>
                <button className="btn-pass" onClick={handlePass}>PASS ⏭️</button>
            </div>
        </div>
    )
}

export default Croquis_view;
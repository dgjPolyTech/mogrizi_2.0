import React, {useState, useEffect} from "react";

function Croquis_view(props){
    // require = 폴더 안의 파일 중 설정한 규격에 맞는 파일들만 가져옴.
    // assets 안에 .png 파일들 목록 가져옴.
    const imgContext = require.context("../assets", true, /\.png$/);

    const assets_url = [
        {
            name: "casual",
            url: "../assets/casual"
        },
        {
            name: "sports",
            url: "../assets/sports"
        },
        {
            name: "action",
            url: "../assets/action"
        }
    ];

    const [currImg, setCurrImg] = useState("");
    const [timer, setTimer] = useState(0);

    //
    const change_img = () => {
        // require로 긁어온 폴더 안의 파일 경로들을 모두 가져옴.
        const allKeys = imgContext.keys();

        // 조건에 맞는 파일만 validKeys에 들어감.
        const validKeys = allKeys.filter((path) => {
            // 주제 경로 설정하는 로직
            // 삼항연산자를 or 방식으로 쓴 것. or 조건은 앞의 조건이 true면 뒤는 실행 안하는 원리를 이용한 것이라고 함.
            // 따라서 all이 true면 그냥 넘어가게 되는 것
            const isCategoryMatch = props.category === 'all' || path.includes(props.category);

            // 여기도 마찬가지로 difficult가 0이면 그냥 넘어감
            const isDiffMatch = props.difficult === 0 || path.includes(`/${props.difficult}_`);

            return isCategoryMatch && isDiffMatch;
        });

        // 이미지 없으면 경고 출력
        if (validKeys.length === 0) {
            console.log("조건에 맞는 이미지가 없습니다. (설정: ", props.category, props.difficult, ")");
            return;
        }

        const randomIdx = Math.floor(Math.random() * validKeys.length);
        const selectedKey = validKeys[randomIdx];

        const finalImage = imgContext(selectedKey);

        setCurrImg(finalImage);
    };

    // timer가 다 돌아갈 때마다 이미지를 바꿔주면서 state 발동 => 화면을 다시 그리게 됨.
    useEffect(() => {
        change_img();

        const timer = setInterval(() => {
            setCurrImg("../code/assets/casual/1_1.png");
        }, props.time);

        // clearInterval = setInterval 초기화 해주는 함수라고 함.
        return () => clearInterval(timer)
    }, );

    return (
        <div className={"main-container-view"}>
            <div className={"content-view"}>
                {currImg ? (
                    <img src={currImg} alt="크로키 자료" style={{ maxHeight: "500px", maxWidth: "100%" }} />
                ):(
                    <p>이미지가 로딩 중...</p>
                )}
            </div>
            <button>STOP</button>
            <button>PASS</button>
        </div>
    )
}

export default Croquis_view;
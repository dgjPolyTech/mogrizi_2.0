import React, {useState, useEffect} from "react";

function Croquis_view(props){
    const assets_url = [
        {
            name: "casual",
            url: "../code/assets/casual"
        },
        {
            name: "sports",
            url: "../code/assets/sports"
        },
        {
            name: "action",
            url: "../code/assets/action"
        }
    ];

    // 난이도에 따른 랜덤 이미지 표출 함수
    const croquis_imgs = () => {
        let diff = props.difficult;
        let cate = props.category;

        let result_url = "";


        // 주제가 all(전체)면 완전 랜덤 이미지 경로를 출력한다.
        if(cate === "all") {
            let cate =  Math.floor(Math.random());
            // let cate = 리액트에서 랜덤값 어케뽑아?
            // 이미지 이름 첫번째 자리 숫자(난이도 의미)
            // let diff_no =
            // 이미지 이름 두번째 자리 숫자(이미지 자체 번호)
            // let idx_no =
            // 랜덤함수 이용해 assets_url에서 name랜덤 뽑기/diff_no/idx_no 이렇게 조합할 것
            result_url = assets_url["sports"].url;
        }
    };


    return setInterval(() =>
        <div className={"main-container_view"}>
            <div className={"content_view"}>
            </div>
            <div>PASS</div>
        </div>
    , props.interval);
}

export default Croquis_view;
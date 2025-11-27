import React from "react";
import Croquis_view from "./Croquis_view";

function Croquis(){
    return(
        <div class={"main-container"}>
            <div class={"title"}>
                <h1>크로키 연습 페이지</h1>
            </div>

            <div class={"menus"}>
                <ul>
                    <li>카테고리 설정:</li>
                    <li>시간 설정: </li>
                    <button>START</button>
                    <button>STOP</button>
                </ul>
            </div>

            <div class={"content"}>
                <Croquis_view />
            </div>
        </div>
    );
}

export default Croquis;
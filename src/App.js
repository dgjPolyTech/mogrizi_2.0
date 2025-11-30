import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./code/Header";
import Footer from "./code/Footer";

import Home from "./code/home/Home";
import Croquis from "./code/croquis/Croquis";
import Keywords from "./code/keywords/Keywords";
import Pallete from "./code/pallete/Pallete";

function App() {
    // 전체 레이아웃 스타일
    const appStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh' // 화면 전체 높이 사용
    };

    const contentStyle = {
        flex: 1, // ⭐ 핵심: 남은 공간(100% - 10% - 15%)을 다 차지해라!
        overflow: 'auto' // 내용 많으면 스크롤 생기게
    };

    return (
        <div style={appStyle}>
            <BrowserRouter>
                <Header />

                <div style={contentStyle}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/croquis" element={<Croquis />} />
                        <Route path="/keywords" element={<Keywords />} />
                        <Route path="/pallete" element={<Pallete />} />
                    </Routes>
                </div>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
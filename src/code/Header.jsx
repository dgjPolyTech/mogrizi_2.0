import React from 'react';

function Header() {
    // Header와 Footer는 따로 css 안 만들고 코드 내에서 적용한다.

    const headerStyle = {
        height: '5vh',       // 보여지는 화면 기준 높이 7.5%
        backgroundColor: '#333',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
        boxSizing: 'border-box'
    };

    return (
        <header style={headerStyle}>
            <h2>모그리지</h2>
        </header>
    );
}

export default Header;
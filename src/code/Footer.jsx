import React from 'react';

function Footer() {
    // Header와 Footer는 따로 css 안 만들고 코드 내에서 적용한다.
    const footerStyle = {
        height: '10vh',       // 보여지는 화면 기준 높이의 10%
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid #ccc'
    };

    return (
        <footer style={footerStyle}>
            <p>Copyright © 2025 Mogriji. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
// componenets/AppLayout.js
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

const AppLayout = ({ children }) => {
    return (
      <div>
        <div>
          <Link href="/" legacyBehavior><a>노드버드</a></Link>
          <Link href="/profile" legacyBehavior><a>프로필</a></Link>
          <Link href="/signup" legacyBehavior><a>로그인</a></Link>
        </div>
        {children}
      </div>
    );
  };

AppLayout.prototype = {
  children: PropTypes.node.isRequired,  // prop가 제공되지 않을 때 경고 문구를 출력함
};

export default AppLayout;

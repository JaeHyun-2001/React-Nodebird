// componenets/AppLayout.js
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';
import Head from 'next/head';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Menu mode="horizontal">
        <Menu.Item><Link href="/" legacyBehavior><a>노드버드</a></Link></Menu.Item>
        <Menu.Item><Link href="/profile" legacyBehavior><a>프로필</a></Link></Menu.Item>
        <Menu.Item><Link href="/signup" legacyBehavior><a>로그인</a></Link></Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,  // prop가 제공되지 않을 때 경고 문구를 출력함
};

export default AppLayout;

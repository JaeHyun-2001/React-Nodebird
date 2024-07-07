// componenets/AppLayout.js
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
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
        <Menu.Item><Input.Search enterButton /></Menu.Item>
        <Menu.Item><Link href="/signup" legacyBehavior><a>로그인</a></Link></Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}> 왼쪽 메뉴 </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}> 
        <a href="https://github.com/JaeHyun-2001" target="_blank" rel="noreferrer noopener">Made By JungMinSung </a>
        </Col>
      </Row>
      
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,  // prop가 제공되지 않을 때 경고 문구를 출력함
};

export default AppLayout;

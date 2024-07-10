// componenets/AppLayout.js
import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import Head from 'next/head';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';


const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const items = [
    {
      label: (<Link href="/" legacyBehavior><a>노드버드</a></Link>),
      key: 'title',
    },
    {
      label: (<Link href="/profile" legacyBehavior><a>프로필</a></Link>),
      key: 'profile',
    },
    {
      label: (<Input.Search enterButton />),
      key: 'search',
    },
    {
      label: (<Link href="/signup" legacyBehavior><a>로그인</a></Link>),
      key: 'signup',
    },
  ]
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Menu mode="horizontal" items={items}></Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}> {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />} </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/JaeHyun-2001" target="_blank" rel="noreferrer noopener">Made By JungMinSung </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,  // prop가 제공되지 않을 때 경고 문구를 출력함
};

export default AppLayout;

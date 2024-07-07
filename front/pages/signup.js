// pages/signup
import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';


const Signup = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird | 회원가입</title>
      </Head>
      <div> 회원가입 페이지 </div>
    </AppLayout>
  )
};
export default Signup;
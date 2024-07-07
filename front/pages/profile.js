// pages/profile
import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird | 내 프로필</title>
      </Head>
      <div> 내 프로필 </div>
      </AppLayout>
  )
};
export default Profile;
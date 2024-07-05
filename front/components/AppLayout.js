// componenets/AppLayout.js
import React, { Children } from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div> 공통 메뉴</div>
      {children}
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,  // prop가 제공되지 않을 때 경고 문구를 출력함
};

export default AppLayout;

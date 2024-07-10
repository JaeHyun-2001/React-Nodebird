import { Component } from "react";
import Head from "next/head";
import wrapper from "../store/configureStore";
import PropTypes from 'prop-types';

const NodeBird = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  )
}

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);
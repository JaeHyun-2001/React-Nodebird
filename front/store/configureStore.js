import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

const initialState = {
  // 초기 상태 업데이트 예정
}

const reducer = (state = initialState, action) => {
  // 업데이트 예정
}


const configureStore = () => {
  const store = createStore(reducer);
  return store;
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
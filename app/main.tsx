import React from 'react';
import { createRoot } from 'react-dom/client';
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import './index.css';

// import reducer from './reducers';
// import mySaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(mySaga);
const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
  </React.StrictMode>
);

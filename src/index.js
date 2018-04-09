import React from 'react';
import ReactDOM from 'react-dom';
import './globals/styles.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}

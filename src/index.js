import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ChatRoom from './components/ChatRoom'
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

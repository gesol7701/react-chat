import React from 'react'
import Top from './components/Top'
import ChatRoom from './components/ChatRoom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

const App = () => (
  <Router>
    <Route exact path="/" component={ChatRoom} />
    <Route path="/enter" component={Top} />
  </Router>
)
export default App

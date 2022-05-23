import './App.css';
import axios from 'axios';
import '../node_modules/uikit/dist/css/uikit.css';
import '../node_modules/uikit/dist/js/uikit-icons.min.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Login from './components/auth/login';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Tasks } from './pages/Tasks';
import { Task } from './pages/Task';
import { User } from './pages/User';
const UIkit = require('uikit')
const Icons = require('uikit/dist/js/uikit-icons')
UIkit.use(Icons);

axios.defaults.baseURL = "http://localhost:800/";
axios.defaults.headers.post['Accept'] = "application/json";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  var retrieveData = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : "";
  const token = retrieveData.auth_token;
  config.headers.Authorization = token ? `Beared ${token}` : '';
  return config;
});


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ localStorage.getItem('auth') ? <Home /> : <Login />}></Route>
        <Route path='/home' element={localStorage.getItem('auth') ?  <Home /> : <Login />}></Route>
        <Route path='/projects' element={localStorage.getItem('auth') ?  <Projects /> : <Login />}></Route>
        <Route path='/projects/tasks/:projectId' element={localStorage.getItem('auth') ?  <Tasks /> : <Login />}></Route>
        <Route path='/task/:taskId' element={localStorage.getItem('auth') ?  <Task /> : <Login />}></Route>
        <Route path='/user' element={localStorage.getItem('auth') ?  <User /> : <Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

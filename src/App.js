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
        <Route path='/home' element={ <Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

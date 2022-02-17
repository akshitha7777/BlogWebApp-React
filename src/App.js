import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Home from './components/Home';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import ReadBlog from './components/ReadBlog';
import UpdateBlog from './components/UpdateBlog';

function App() {
  return (
    <div >
      <Router>
        <NavBar />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/blogs" element={ <Blogs /> } />
          <Route path="/addblog" element={ <AddBlog /> } />
          <Route path="/readblog/:id" element={ <ReadBlog /> } />
          <Route path="/updateblog/:id" element={ <UpdateBlog /> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import PostPage from './pages/postpage/PostPage';
import Profile from './pages/profile/Profile';
import WritePost from './pages/writepost/WritePost';
import {Context} from './context/Context';

function App() {
  //const user=true;
  const { user } = useContext(Context);
  return (
    <>
    <Router>
     <NavBar></NavBar>
     <Switch>
       <Route exact path="/"><Home /></Route>
       <Route path="/signup">
         {user ? <Home /> : <SignUp />}
         </Route>
       <Route path="/login">
       {user ? <Home /> : <Login />}
       </Route>
       <Route path="/post/:postId"><PostPage /></Route>
       <Route path="/profile">
       {user ? <Profile /> : <SignUp />} 
         </Route>
       <Route path="/write">
       {user ? <WritePost /> : <SignUp />} 
         </Route>
     </Switch>
     </Router>
    </>
  );
}

export default App;

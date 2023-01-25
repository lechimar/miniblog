import './App.css';
import About from "./pages/About/About";
import Home from './pages/Home/Home';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';


// context
import { AuthProvider } from './context/AuthContext';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

//pages

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  // if user is undefined, then we are still loading data.
  const loadingUser = user === undefined;

  useEffect(() => {
    // even if we don't have a user, we will receive something different than undefined
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);
  
  if(loadingUser){
    return <p>carregando...</p>
  }

  return (
    <div className="App">  
    <AuthProvider value={{user}}>  
      <BrowserRouter>
       <Navbar />
       <div className='container'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/posts/create' element={<CreatePost/>} />
            <Route path='/dashboard' element ={<Dashboard />} />
        </Routes>
       </div>
       <Footer />
      </BrowserRouter>      
    </AuthProvider>  
    </div>
  );
}

export default App;

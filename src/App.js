import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home';
import Login from './views/Auth/Login';
import Signup from './views/Auth/Signup';
import Feed from './views/Feed';
import BookList from './components/BookList';
import Community from './views/Community';
import Review from './views/Review';
import AddBook from './components/Shelf/AddBook';
import UserProfile from './views/Profile/UserProfile';
import UpdateReview from './views/UpdateReview';
import './index.css';
import UpdateProfile from './views/Profile/UpdateProfile';


export default function App() {

  const getUserFromLocalStorage = () => {
    const foundUser = localStorage.getItem('user')
    if (foundUser){
      return JSON.parse(foundUser)
    }
    return {}
  };

  const [user, setUser] = useState(getUserFromLocalStorage())


  const logMeIn = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  };

  const logMeOut = () => {
    setUser({})
    localStorage.removeItem('user')
  };

  

// I don't have the navbar in the routes, because I did not want it on the main login/signup page 
// couldn't figure out a better way
    return (
      <div className='container-fluid'>
          <Routes>
            <Route path='/' element={<Home user={user}  />} /> 
            <Route path='/feed' element={<Feed user={user} />} /> 
            <Route path='/profile' element={<UserProfile user={user} />} /> 
            <Route path='/profile/:id' element={<UpdateProfile user={user} />} /> 
            <Route path='/login' element={<Login logMeIn={logMeIn}/>} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/book' element={<BookList user={user} />} />
            <Route path='/community' element={<Community user={user} />} />
            <Route path='/review/:id' element={<Review user={user} />} />
            <Route path='/shelf/:id' element={<AddBook user={user} />} />
            <Route path='/reviews/:reviewId' element={<UpdateReview user={user} />} />
          </Routes>
      </div>
      
    )
  }
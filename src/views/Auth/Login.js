import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './auth.css'


export default function Login({ logMeIn }) {
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState('');
    
    const sendBasicAuth = async (e) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:5000/token', {
            method: "POST",
            headers: {Authorization: `Bearer ${btoa(e.target.username.value+":"+e.target.password.value)}`,
            "Access-Control-Allow-Origin": '*',
            "Access-Control-Allow-Methods": 'PUT, GET, POST, DELETE, OPTIONS',
            "Access-Control-Allow-Headers": 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
        }
        });
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok') {
            logMeIn(data.data)
            setRedirect(true)
        }
    };
    
        return redirect?
        (<Navigate to='/feed' />)
        :
        (
            <div className='home'>

                <h6>{message}</h6>
                <form onSubmit={(e)=>sendBasicAuth(e)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label> 
                        <input name='username' type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                    </div>     
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input name='password' type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="button">Submit</button>
                    <div className="login"> don't have an account? </div>
                    <a href={`/signup`} className="login"> sign up here </a>
                </form>
            </div>
        )
    }
import React, { Component } from "react";
import { useState, Navigate } from "react";
import { useNavigate } from 'react-router-dom';


export default function SignUp({ }) {
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    
   const sendSignUpInfo = async (e) => {
        e.preventDefault();

        if (e.target.password.value !== e.target.confirmPassword.value){ 
            return
        }

        const res = await fetch('http://127.0.0.1:5000/api/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": 'PUT, GET, POST, DELETE, OPTIONS',
                "Access-Control-Allow-Headers": 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
            },
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            })
        });
        const data = await res.json();
        if (data.status === 'ok') {
            navigate(`/login`)        }
    };
    
    return (
            <form className='home2' onSubmit={(e)=>{sendSignUpInfo(e)}}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">username</label>
                    <input type="text" className="form-control" name='username'/>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">email address</label>
                    <input type="email" className="form-control" name='email'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">password</label>
                    <input type="password" className="form-control" name='password'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">confirm password</label>
                    <input type="password" className="form-control" name='confirmPassword'/>
                </div>
                
                <button type="submit"  className="button">submit</button>

                <div className="login"> have an account? </div>
                    <a href={`/login`} className="login"> sign in here </a>
            </form>
        )
    }

















// import React, { Component } from 'react'
// import { Navigate } from 'react-router-dom';

// import './auth.css'



// export default class SignUp extends Component {

    // sendSignUpInfo = async (e) => {
    //     e.preventDefault();

    //     if (e.target.password.value !== e.target.confirmPassword.value){ 
    //         return
    //     }

    //     const res = await fetch('http://127.0.0.1:5000/api/signup', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": '*',
    //             "Access-Control-Allow-Methods": 'PUT, GET, POST, DELETE, OPTIONS',
    //             "Access-Control-Allow-Headers": 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
    //         },
    //         body: JSON.stringify({
    //             username: e.target.username.value,
    //             email: e.target.email.value,
    //             password: e.target.password.value
    //         })
    //     });
//         const data = await res.json();
//         console.log(data)
        
//     };
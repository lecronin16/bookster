import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default class UpdateProfile extends Component {

    editProfileInfo = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://127.0.0.1:5000/api/editprofile/${this.props.user.id}`, {
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
        console.log(data)
    };


  render() {
    return (
        <div>
        <Navbar currentUser={this.props.user} logMeOut={this.props.logMeOut}/> 
                
                Update User Profile:
            <form className='card' onSubmit={(e)=>{this.editProfileInfo(e)}}>
            {/* <div className="mb-s">
                <label htmlFor="exampleInputEmail1" className="form-label">profile image</label>
                <input type="text" className="form-control" name='imgUrl'/>
            </div> */}
            <div className="mb-s">
                <label htmlFor="exampleInputEmail1" className="form-label">username</label>
                <input type="text" placeholder={this.props.user.username}  className="form-control" name='username'/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">email address</label>
                <input type="email" placeholder={this.props.user.email}  className="form-control" name='email'/>
               </div> 
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">password</label>
                <input type="password" placeholder="********"className="form-control" name='password'/>
            </div>

            <button type="submit"  className="button">submit</button>
            </form>
            </div>
    )
  }
}

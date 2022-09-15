import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import ShowShelf from '../../components/Shelf/ShowShelf';
import './profile.css'
import ShowMyReview from '../../components/Shelf/ShowMyReview';

export default class UserProfile extends Component {
    constructor(){
        super();
        this.state = {
            reviews:[],
            shelf:[]
        }
    }

    componentDidMount = async () => {
        this.getReviews()
        this.getShelves()
    };

    getReviews = async () => {
        const res = await fetch(`http://127.0.0.1:5000/api/reviews/user/${this.props.user.id}`);
        const data = await res.json();
        console.log(data)
        this.setState({reviews: data.reviews})
    };

    showReviews = () => {
        return this.state.reviews.map(r=><ShowMyReview reviewInfo={r}/>)
    };

    getShelves = async () => {
        const res2 = await fetch(`http://127.0.0.1:5000/api/shelf/${this.props.user.id}`);
        const data2 = await res2.json();
        console.log(data2)
        this.setState({shelf: data2.shelf})
    };

    showShelves = () => {
        return this.state.shelf.map(s=><ShowShelf shelfInfo={s}/>)
    };

    deleteUser = async (e) => {

        e.preventDefault();

        const res = await fetch(`http://127.0.0.1:5000/api/editprofile/delete/${this.props.user.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": 'PUT, GET, POST, DELETE, OPTIONS',
                "Access-Control-Allow-Headers": 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
            },
        });
        const data = await res.json();
    };
    

    render = () => {
        return (
            <div>
                <Navbar currentUser={this.props.user} logMeOut={this.props.logMeOut}/> 
            <div className='grid-container'>
                <div className='c1' >
                    <button class="button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Reviews:
                    </button>
                    <div class="collapse" id="collapseExample">
                    {this.showReviews()} 
                    </div> 
                    <div className='r1'>
                    <button class="button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                    Shelved Books:</button>
                    <div class="collapse" id="collapseExample2">
                    {this.showShelves()}
                    </div>
                    </div>
                    </div>
                    


                 <div className ='c2' >
                    User Profile
                    <div className="card" style={{width: "25rem"}} >
                        {/* <img src={this.props.user.img_url} className="card-img-top" alt="..." style={{height: "20rem"}}/> */}
                        <div className="card-body">
                        <h5 className="card-title">{this.props.user.username}</h5>
                        <h5 className="card-title">{this.props.user.email}</h5>
                        {/* number of books reviewed? */}
                        <a href={`/profile/${this.props.user.id}`}>
                        <button className='button'>update profile</button>
                        </a>

                        <a href={`/login`}>
                        <button className='button' onClick={this.deleteUser}>delete profile</button>
                        </a>

                        </div>
                        </div>

                        </div>
                 </div>
            </div>
        )
    }
}

//show read books/posts and want to read shelf
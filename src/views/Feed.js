import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import ShowReview from '../components/Feed/ShowReview';

export default class Feed extends Component {
    constructor(){
        super();
        this.state = {
            reviews:[]
        }
    }

    componentDidMount = async () => {
        this.getReviews()
    }

    getReviews = async () => {
        const res = await fetch('http://127.0.0.1:5000/api/reviews');
        const data = await res.json();
        console.log(data)
        this.setState({reviews: data.reviews})
    }

    showReviews = () => {
        return this.state.reviews.map(r=><ShowReview  reviewInfo={r}/>)
    }

    render = () => {
        return (
            <div>
                <Navbar currentUser={this.props.user} logMeOut={this.props.logMeOut}/> 
                 {this.showReviews()} 

            </div>
        )
    }
}
//plan to show only posts for users that you follow
//essentially use as a home page



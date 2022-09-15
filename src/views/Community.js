import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import ShowReview from '../components/Feed/ShowReview';
import TopRated from '../components/TopRated'

export default class Community extends Component {
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
        const res = await fetch('http://127.0.0.1:5000/api/reviews/good');
        const data = await res.json()
        this.setState({reviews: data.reviews})
        }


    showReviews = () => {
      return this.state.reviews.slice(0, 10).map(r=><TopRated  reviewInfo={r}/>)
      }

    render = () => {
        return (
            <div>
                <Navbar currentUser={this.props.user} logMeOut={this.props.logMeOut}/> 
                Top Rated Books:
                 {this.showReviews()} 

            </div>
        )
    }
}


//possibly add show all users?







//plan to be able to search for users in right (pull up User Profile?)
//also plan to show ALL posts here. 





// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import ShowReview from '../components/Feed/ShowReview';
// import Navbar from '../components/Navbar/Navbar'

// export default function Community({user,logMeOut}) {
//     const [topRated, setTopRated] = useState([])

//     const getRatings = async () => {
//         const res = await fetch('http://127.0.0.1:5000/api/reviews');
//         const data = await res.json();
//         console.log(data)
//         setTopRated(data.topRated)

//     }
//     useEffect(() => {
//       getRatings()
//     }, [])

//     const showRatings = () => {
//         return this.topRated.map(r=><ShowReview reviewInfo={r}/>)
//     }

//   return (
//     <div>
//     <Navbar currentUser={user} logMeOut={logMeOut}/> 
//       <div>
//       {showRatings()}
//       </div>
//     </div>
//   )
// }






// showReviews = () => {
//   const i=0
//   for (i in this.state.reviews){
//     if (
//       this.state.reviews.ratingValue >= 5
//     ) i++
//     return this.state.reviews.map(r=><ShowReview  reviewInfo={r}/>)
//   } i++
// }
// import React, {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar/Navbar';

// export default function UpdatePost({ user,logMeOut }) {
//     const [review, setReview] = useState({})
//     const { id } = useParams()

//     const sendUpdates = async (e) => {
//         e.preventDefault();
//         const res = await fetch(`http://127.0.0.1:5000/api/reviews/update`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 "Authorization": `Bearer ${user.token}`
//             },
//             body: JSON.stringify({
//                 title: review.title,
//                 caption: e.target.caption.value,
//                 imgUrl: review.imgUrl,
//             })
//         });
//         const data = await res.json();
//         console.log(data)
//     }
    

//     const getSingleReview = async () => {
//         const res = await fetch(`http://127.0.0.1:5000/api/reviews/${id}`);
//         const data = await res.json();
//         if (data.status === 'ok'){
//             setReview(data.review)
//         }
//     };

//     useEffect(()=>{
//         getSingleReview()
//     }, [])



//     return (
//         <div>
//         <Navbar currentUser={user} logMeOut={logMeOut}/> 
//         <form className='col-4' onSubmit={(e) => { sendUpdates(e) }}>
//                 <div className='book-details-item title' name='title'>
//                   <span className='fw-6 fs-24'>{review.title}</span>
//                 </div>
//                 <img src = {review.imgUrl} alt = "" name='imgUrl'/>

//                 <div className="mb-3">
//                     <label className="form-label">Caption</label>
//                     <input type="text" className="form-control" name='reviewCapt' />
//                 </div>

//                 <button type="submit" className="button">Submit</button>

//         </form>
//         </div>
//     )

// }



//CLASS VERSION 


// import React, { Component } from 'react'
// import Navbar from '../components/Navbar/Navbar';

// export default class UpdateReview extends Component {
//     constructor(){
//         super();
//         this.state = {
//             reviews:[],
//         }
//     }

//     componentDidMount = async () => {
//         this.getSingleReview()
//     };

//     sendUpdates = async (e) => {
//         e.preventDefault();
//         const res = await fetch(`http://127.0.0.1:5000/api/reviews/update`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 "Authorization": `Bearer ${this.props.user.token}`
//             },
//             body: JSON.stringify({
//                 title: this.state.title,
//                 caption: e.target.caption.value,
//                 imgUrl: this.state.imgUrl,
//             })
//         });
//         const data = await res.json();
//         console.log(data)
//     }
    

//     getSingleReview = async () => {
//         const res = await fetch(`http://127.0.0.1:5000/api/reviews/${this.props.id}`);
//         const data = await res.json();
//         if (data.status === 'ok'){
//             this.setState({reviews: data.reviews})
//         }
//     };


//   render() {
//     return (
//       <div>UpdateReview
//         <div>
//         <Navbar currentUser={this.props.user} /> 
//         <form className='col-4' onSubmit={(e) => { this.sendUpdates(e) }}>
//                 <div className='book-details-item title' name='title'>
//                   <span className='fw-6 fs-24'>{this.props.review.title}</span>
//                 </div>
//                 <img src = {this.props.review.imgUrl} alt = "" name='imgUrl'/>

//                 <div className="mb-3">
//                     <label className="form-label">Caption</label>
//                     <input type="text" className="form-control" name='reviewCapt' />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>

//         </form>
//         </div>
//       </div>
//     )
//   }
// }

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coverImg from "../assets/coverImg.jpg";
import Navbar from '../components/Navbar/Navbar';
import { Typography, Rating, Box } from '@mui/material';


export default function Review({user,logMeOut}) {
  const URL = "https://openlibrary.org/works/";
  const {id} = useParams();
  const [book, setBook] = useState(null);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();



  useEffect(() => {
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {title, covers} = data;
          const newBook = {
            title: title,
            imgUrl: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
          };
          setBook(newBook);
          setLoading(false)
        } 
      } catch(error){
        console.log(error);
      }
    }
    getBookDetails();
  }, [id]);


  const sendReview = async (e) => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/api/reviews/create', {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*',
            "Access-Control-Allow-Methods": 'PUT, GET, POST, DELETE, OPTIONS',
            "Access-Control-Allow-Headers": 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
          },
        body: JSON.stringify({
            title: book.title,
            imgUrl: book.imgUrl,
            reviewCapt: e.target.reviewCapt.value,
            ratingValue: e.target.ratingValue.value,
        })
    });
    const data = await res.json();
    console.log(data)
    navigate(`/feed`) 
  };
  
  if (loading) { 
    return (<div>loading ...</div>)
  }
  else{
  return (
    <>
      <Navbar currentUser={user} logMeOut={logMeOut}/>    
          <div>
              <form className='card'  onSubmit={(e) => { sendReview(e) }}  >
                <div className='book-details-item title' name='title'>
                  {book.title}
                </div>
                <img src = {book.imgUrl} alt = "" name='imgUrl' style={{height: "20rem"}}/>

                <div className="mb-3">
                    <label className="form-label">Caption</label>
                    <textarea type="text" className="form-control" name='reviewCapt' rows="12" style={{height: "80px"}} />
                </div>

                <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  ></Box>
                <Typography component="legend"></Typography>
                    <Rating
                      name="ratingValue"
                      className="stars"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />    
                  
                    <button type="submit" className="button">Submit</button>
                  
            </form>   
          </div>
    </>
  )
 }
  
}



{/* <div className="mb-3">
    <label className="form-label">Rating:</label>
    <input type="text" className="form-control" name='ratingValue' />
</div> */}









//   <div className="card" style="width: 18rem;">
//   <img src = {book.img_url} alt = "imgUrl" name='imgUrl' />
//   <div className="card-body">
//       <h5 className='book-details-item title' name='title'>
//           <span className='fw-6 fs-24'>{book.title}</span>
//         </h5>
//     <input type="text" className="form-control" name='caption' />
//     <button type="submit" className="btn btn-primary" >Submit</button>
//   </div>
// </div>
import React, {  useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coverImg from "../../assets/coverImg.jpg";
import Navbar from '../Navbar/Navbar';

export default function AddBook({user,logMeOut}) {
  const URL = "https://openlibrary.org/works/";
  const {id} = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();


  useEffect(() => {
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);
        console.log(user)

        if(data){
          const {title, author, covers} = data;
          const newBook = {
            title: title,
            authors: author,
            imgUrl: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
          };
          setBook(newBook);
          setLoading(false)

        } else {
          setBook(null);
        }
      } catch(error){
        console.log(error);

      }
    }
    getBookDetails();
  }, [id]);

  const sendBook = async (e) => {
    e.preventDefault();
  
    const res = await fetch('http://127.0.0.1:5000/api/shelf/create', {
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
            author: book.author,
            shelf: e.target.shelf.value,
        })
    });
    const data = await res.json();
    console.log(data)
    navigate(`/profile`)
  };

  if (loading) { 
    return (<div>loading...</div>)
  }
  else{
    return(
      <div>
        <Navbar currentUser={user} logMeOut={logMeOut}/>             
  
         <form className='card'  onSubmit={(e) => { sendBook(e) }}  >
                <div className='book-details-item title' name='title'>
                  <span className='fw-6 fs-24'>{book.title}</span>
                </div>
                <div className='book-details-item author' name='author'>
                  <span className='fw-6 fs-24'>{book.authors}</span>
                </div>
                <img src = {book.imgUrl} alt = "" name='imgUrl'/>

                <div className="mb-3">
                    <label className="form-label">Name of Shelf:</label>
                    <input type="text" className="form-control" name='shelf' />
                </div>
                <button type="submit" className="button">Submit</button>
            </form>   

        </div>

  )}}

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Book = (book) => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate(`/shelf/${book.id}`);
  };

  const handleReview = () => {
    navigate(`/review/${book.id}`);
  };


  return (
    <div className='card' style={{width: "25rem"}}>
        <img src = {book.cover_img} className='card-img-top' alt = "..." style={{height: "20rem"}} />

      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>

        <div> 
        <button type="button" className="button" onClick={handleReview}>Review</button>
        <button type="button" className="button" onClick={handleAdd}>Add to Shelf</button>
        </div>
      </div>
    </div>
  )
}

export default Book
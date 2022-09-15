import React from 'react';
import { useGlobalContext } from '../context';
import Book from '../views/Book';
import coverImg from '../assets/coverImg.jpg'
import Navbar from './Navbar/Navbar';

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = ({user,logMeOut}) => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  return (
    <section className='booklist'>
    <Navbar currentUser={user} logMeOut={logMeOut}/> 
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 5).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList
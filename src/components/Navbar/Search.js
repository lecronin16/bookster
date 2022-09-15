import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./Navbar.css";


const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate("/book");
  };

  return (
    <div className='search-form'>
      <div className='container'>
          <form className='search-form' onSubmit={handleSubmit}>
              <input type = "text" className='form-control' placeholder='search a book..' ref = {searchText} />
              <button type="buttonnav" className="buttonnav">go</button>
          </form>
      </div>
    </div>
  )
}
export default SearchForm
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import "./Navbar.css";
import SearchForm from './Search';



export default function Navbar({currentUser, user, logMeOut}) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <div className='navbar'>

      <details>
        <summary></summary>
        <nav class="menu">


        <Link to = "/feed" className='navbar-brand flex'>
            <span className='text-uppercase fw-7 fs-24 ls-1'>Welcome to bookster</span>
          </Link>

          {currentUser.username ?
        <>
          <div className="dropdown">

          {/* <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/profile">Hello, {currentUser.username}</Link> */}
          
            <a className="button4" href="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
              Hello, {currentUser.username}
              </a>

              <ul className="dropdown-menu">
                <li><Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/profile">View Profile</Link></li>
                <a onClick={()=>logMeOut()}>
            <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/login">Log Out</Link>
          </a>
              </ul></div>
        </>
        :
        <>
          <a>
            <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/login">Login</Link>
          </a>
          <a>
            <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/signup">Sign Up</Link>
          </a>
          
        </>
      }
            <a className='nav-item'>
              <Link to = "/feed" className='nav-link text-uppercase fs-22 fw-6 ls-1'>Feed</Link>
            </a>
            <a className='nav-item'>
              <Link to = "/community" className='nav-link text-uppercase fs-22 fw-6 ls-1'>Community</Link>
            </a>
            <SearchForm />
        </nav>
      </details>
      </div>

  )
}

// <div className='navbar'>
// <nav>
//   <div className="container-fluid">
        // <div className='brand'>
        //   <Link to = "/feed" className='navbar-brand flex'>
        //     <span className='text-uppercase fw-7 fs-24 ls-1'>bookster</span>
        //   </Link>
        // </div>

      //   <ul>
      //     {currentUser.username ?
      //   <>
      //     <li>
      //       <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/profile">Hello, {currentUser.username}</Link>
      //     </li>

      //     <li onClick={()=>logMeOut()}>
      //       <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/login">Log Out</Link>
      //     </li>
      //   </>
      //   :
      //   <>
      //     <li>
      //       <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/login">Login</Link>
      //     </li>
      //     <li>
      //       <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/signup">Sign Up</Link>
      //     </li>
          
      //   </>
      // }
      //       <li className='nav-item'>
      //         <Link to = "/feed" className='nav-link text-uppercase fs-22 fw-6 ls-1'>Feed</Link>
      //       </li>
      //       <li className='nav-item'>
      //         <Link to = "/community" className='nav-link text-uppercase fs-22 fw-6 ls-1'>Community</Link>
      //       </li>
      //       <SearchForm />
      //       </ul>
      //   </div>

//     </nav>
// </div> 

// )
// }















// <div>         
// <nav className="navbar navbar-expand-lg bg-light" >
//  <div className="container-fluid">
//    <a className="navbar-brand" href="/">bookster</a>
//    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//      <span className="navbar-toggler-icon"></span>
//    </button>
//    <div className="collapse navbar-collapse" id="navbarSupportedContent">
//      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//        <li className="nav-item">
//          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//        </li>

//        <li className="nav-item">
//          <Link className="nav-link" to="/feed">Feed</Link>
//        </li>

//        {currentUser.username ?
//          <>
//            <li className="nav-item">
//              <p className="nav-link">Hello, {currentUser.username}</p>
//            </li>

//            <li className="nav-item" onClick={()=>logMeOut()}>
//              <Link className="nav-link" to="/login">Log Out</Link>
//            </li>
//          </>
//          :
//          <>
//            <li className="nav-item">
//              <Link className="nav-link" to="/login">Login</Link>
//            </li>
//            <li className="nav-item">
//              <Link className="nav-link" to="/signup">Sign Up</Link>
//            </li>
           
//          </>
//        }
//      </ul>
//      <form className="d-flex" role="search">
//        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//        <button className="btn btn-outline-success" type="submit">Search</button>
//      </form>
//    </div>
//  </div>
// </nav> 
// </div>












// <div className='navbar'>
// <nav>
//   <div className="container-fluid">
//         <div className='brand'>
//           <Link to = "/feed" className='navbar-brand flex'>
//             <span className='text-uppercase fw-7 fs-24 ls-1'>bookster</span>
//           </Link>
//         </div>

//         <ul>
//           {currentUser.username ?
//         <>
//           <li>
//             <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/profile">Hello, {currentUser.username}</Link>
//           </li>

//           <li onClick={()=>logMeOut()}>
//             <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/login">Log Out</Link>
//           </li>
//         </>
//         :
//         <>
//           <li>
//             <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/login">Login</Link>
//           </li>
//           <li>
//             <Link className="nav-link text-uppercase fs-22 fw-6 ls-1" to="/signup">Sign Up</Link>
//           </li>
          
//         </>
//       }
//             <li className='nav-item'>
//               <Link to = "/feed" className='nav-link text-uppercase fs-22 fw-6 ls-1'>Feed</Link>
//             </li>
//             <li className='nav-item'>
//               <Link to = "/community" className='nav-link text-uppercase fs-22 fw-6 ls-1'>Community</Link>
//             </li>
//             <SearchForm />
//             </ul>
//         </div>

//     </nav>
// </div> 

// )
// }
import React, { Component  } from 'react'

export default class ShowReview extends Component {
  render() {
    const r = this.props.reviewInfo

    return (
        <table>
        <tr>
          <td>{r.title}</td>
          {/* <td>{r.date_reviewed}</td> */}
          <td className='td3'>{r.rating_value}</td>
           {/* <td>
            <a> href={`/review/${this.props.book.id}`}
            <button type="button" className="tablebutton" >Review</button>
            </a>
          </td> */}
        <td className='td2'><a > 
            <button type="button" className="tablebutton">Want to Read?</button>
            </a>
        </td> 
        </tr>
      </table>
    )
  }
}



// return (
//     <div className="card" style={{width: "25rem"}} >
//     <img src={r.img_url} className="card-img-top" alt="..." style={{height: "20rem"}}/>
//     <div className="card-body">
//       <h5 className="card-title">{r.title}</h5>
//       <p>reviewer: {r.author}</p>
//       <p className="card-text">{r.review}</p>
//       <p className="card-text">rating value: {r.rating_value}</p>
//       <p className="card-text">reviewed on: {r.date_reviewed}</p>
//     </div>
//   </div>
// )
// }
// }
import React, { Component, Link, } from 'react'
import './feed.css'

export default class ShowReview extends Component {
  render() {
    const r = this.props.reviewInfo


    return (
        <div className="card" style={{width: "25rem"}} >
        <img src={r.img_url} className="card-img-top" alt="..." style={{height: "20rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{r.title}</h5>
          <p>reviewer: {r.author}</p>
          <p className="card-text">{r.review}</p>
          <p className="card-text">rating value: {r.rating_value}</p>
          <p className="card-text">reviewed on: {r.date_reviewed}</p>
        </div>
      </div>
    )
  }
}



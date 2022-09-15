import React, { Component } from 'react'
import '../Feed/feed.css'

export default class ShowShelf extends Component {
  render() {
    const s = this.props.shelfInfo

    return (
        <div className="card" style={{width: "25rem"}} >
        <img src={s.img_url} className="card-img-top" alt="..." style={{height: "20rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{s.title}</h5>
          <p>shelf: {s.shelf}</p>
        </div>
      </div>
    )
  }
}
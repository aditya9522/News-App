import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
    let {imgPath, title, description, publishedAt, link, auther} = this.props;
    return (
      <div className='my-5 card-shadow'>
        <div className="row g-0 bg-tertiary position-relative border rounded">
          <div className="col-md-6 mb-md-0 p-md-4">
            <div className="ratio ratio-16x9 "><img src={imgPath} className="w-100 border-0 rounded" alt="Not found"/>
            </div>
          </div>
          <div className="col-md-6 p-4 ps-md-0">
            <h5 className="mt-0">{title}</h5>
            <p>{description}</p>
            <p className="card-text mb-1">{auther}</p>
            <a href={link} target='_blank' rel="noreferrer" className="text-primary text-decoration-none">Read more</a>
            <p className="mt-2 card-text"><small className="text-body-secondary">{publishedAt}</small></p>
          </div>
        </div>
      </div>
    )
  }
}

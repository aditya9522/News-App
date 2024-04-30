import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
    let {title, description, publishedAt} = this.props;
    return (
      <div style={{width:'calc(50% - 20px)', margin:'10px'}}>
        <div className="card mb-3">
        <div className="ratio ratio-21x9"><img src={this.props.img} className="card-img-top" alt="..." /></div> 
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">{publishedAt}</small></p>
        </div>
        </div>
      </div>
    )
  }
}

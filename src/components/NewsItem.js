import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
    let {title, description, publishedAt} = this.props;
    return (
      <div>
        <div className="card mb-3">
        <img src={this.props.img} width={"40px"} height={'300px'} className="card-img-top" alt="..." />
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

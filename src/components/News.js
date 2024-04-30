import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Data from './NewsData.json'

export default class News extends Component {
  render() {
    let data = Data.articles;
    return (
      <div className='container my-3'>
        <div className="h4 pb-2 mb-5 text-primary border-2 border-bottom border-primary">
            News Headlines
        </div>
        <div className='d-flex' style={{flexWrap:'wrap'}}>
          {data.map((top) => {
            if (top.urlToImage){
              return (<NewsItem key={top.publishedAt} img={top.urlToImage} title={top.title} description={top.description} publishedAt={top.publishedAt}/>);
            }
          })}
        </div>
      </div>
    )
  }
}

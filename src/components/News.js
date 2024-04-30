import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Data from './NewsData.json'

export default class News extends Component {
  render() {
    let data = Data.articles;
    return (
      <div className='container my-3'>
        <div class="h4 pb-2 mb-5 text-primary border-2 border-bottom border-primary">
            News Headlines
        </div>
        {data.map((top) => {
            return (<NewsItem img={top.urlToImage} title={top.title} description={top.description} publishedAt={top.publishedAt}/>);

        })}

      </div>
    )
  }
}

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import NotFound from './NotFound';
import data from './NewsData.json'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      country: 'in',
      category: 'health',
      query: 'mukesh ambani',
    }
  }

  componentDidMount() {
    this.fetchNews()
  }

  handleCountry = (event) => {
    this.setState({ country: event.target.value }, this.fetchNews)
  }

  handleCategory = (event) => {
    this.setState({ category: event.target.value }, this.fetchNews)
  }

  fetchNews = () => {
    // let { query, category, country } = this.state;
    // fetch(`https://newsapi.org/v2/top-headlines?q=${query}country=${country}&category=${category}&apiKey=84acdcc8c563402aace1039a82971d96`).then(
    //   (response) => response.json()).then((data) => {
    //     if (data.status === 'ok') {
    //       this.setState({ articles: data.articles});
    //     } else {
    //       console.log("Error occured!")
    //       this.setState({articles: []})
    //     }
    //   });

    this.setState({ articles: data.articles })

  }

  render() {
    const {articles} = this.state;

    return (
      <div className='container my-3'>
        <div className="d-flex justify-content-between border-2 border-bottom border-primary pb-2">
            <div className="text-primary fw-semibold fs-4 mx-2">News - Top Headlines</div> 
            <div className="d-flex">
            <select className="form-select mx-2" id="category" defaultValue='Category' onChange={this.handleCategory}>
              <option disabled>Category</option>
              <option value="entertainment">Entertainment</option>
              <option value="business">Business</option>
              <option value="science">Science</option>
              <option value="general">General</option>
              <option value=" health"> Health</option>
              <option value="technology">Technology</option>
              <option value="sports">Sports</option>
            </select>
            <select className="form-select mx-2" id="country" defaultValue='Country' onChange={this.handleCountry}>
              <option disabled>Country</option>
              <option value="in">India</option>
              <option value="us">United State</option>
              <option value="ch">China</option>
              <option value="jp">Japan</option>
              <option value="pk">Pakistan</option>
              <option value="ru">Russia</option>
              <option value="fr">France</option>
            </select>
            </div>
        </div>
        <div>
          {
            articles.length !== 0 ? articles.map((top,idx) => {
              if (top.urlToImage) {
                return <NewsItem key={idx} imgPath={top.urlToImage} title={top.title} description={top.description} publishedAt={top.publishedAt} link={top.url} auther={top.author}/>
              }
            }
            ) : <NotFound/>
          }
        </div>
      </div>
    )
  }
}

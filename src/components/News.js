import React, { Component } from 'react'
import NewsItem from './NewsItem'
import NotFound from './NotFound';
import { TiArrowForward } from "react-icons/ti";
import { TiArrowBack } from "react-icons/ti";
import Loader from './Loader';

// import data from './NewsData.json'

export default class News extends Component {
  constructor() {        // first constructor will run
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      country: 'in',
      category: 'technology',
      page: 1,
      loading: true,
      pageSize: 10,
    }
  }

  componentDidMount() {         //   componentDidMount runs after render() method run
    this.fetchNews()
  }

  handleCountry = (event) => {
    this.setState({ country: event.target.value }, this.fetchNews)
  }

  handleCategory = (event) => {
    this.setState({ category: event.target.value }, this.fetchNews)
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    let { category, country, page, pageSize} = this.state;
    await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=0e85d94d34354893a73c6f941af45a44&page=${page}&pageSize=${pageSize}`).then(
      (response) => response.json()).then((data) => {
        if (data.status === 'ok') {
          this.setState({ articles: data.articles, totalResults: data.totalResults, loading: false});
        } else {
          console.log("Error occured!")
          this.setState({articles: []})
        }
      });

    // console.log('started')
    // this.setState({ articles: data.articles })

  }

  // search = () => {
  //   console.log(this.props.query);
  //   fetch(`https://newsapi.org/v2/everything?q=${this.state.query}&from=2024-05-01&to=2024-05-01&sortBy=popularity&apiKey=0e85d94d34354893a73c6f941af45a44`).then(
  //     (response) => response.json()).then((data) => {
  //       if (data.status === 'ok') {
  //         this.setState({ articles: data.articles});
  //       } else {
  //         console.log("Error occured!")
  //         this.setState({articles: []})
  //       }
  //     });
  // }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
    this.fetchNews()
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
    this.fetchNews()
  }

  render() {
    const { articles } = this.state;               // second the render() method will run

    return (
      <div className='container my-3'>
        <div className="d-flex justify-content-between border-2 border-bottom border-primary pb-2">
          <div className="text-primary fw-medium fs-4 mx-2">News</div>
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
              <option value="he">Israel</option>
              <option value="us">United State</option>
              <option value="nl">Netherlands</option>
              <option value="ch">China</option>
              <option value="jp">Japan</option>
              <option value="en">England</option>
              <option value="de">Germany</option>
              <option value="es">Spain</option>
            </select>
          </div>
        </div>
        <div className="container text-center h3 mt-4 text-primary">Read Top Headlines</div>
        <div id='content'>
          {
            articles.length !== 0 ? !this.state.loading ? articles.map((top, idx) => {
              if (top.urlToImage) {
                return <NewsItem key={idx} imgPath={top.urlToImage} title={top.title} description={top.description} publishedAt={top.publishedAt} link={top.url} auther={top.author} />
              } else {
                return null
              }
            }
            ) : <Loader/> : <NotFound />
          }
          {this.state.totalResults.length === 0 ? '' : <div className="d-flex justify-content-between my-3">
            <button className="btn btn-primary pt-0 pb-0 fs-5" onClick={this.handlePrevious} disabled={this.state.page <= 1}><TiArrowBack /> Previous</button>
            <p className='fs-5'>{this.state.page <= 1 ? '':'< '} Page {this.state.page} {this.state.page > Math.ceil(this.state.totalResults/this.state.pageSize) ? '' : ' >'}</p>
            <button className="btn btn-primary pt-0 pb-0 fs-5" onClick={this.handleNext} disabled={this.state.page > Math.ceil(this.state.totalResults/this.state.pageSize)}>Next <TiArrowForward /></button>
          </div>}
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { BsCloudSlash } from "react-icons/bs";

export default class NotFound extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className="text-center" style={{marginTop:'15%'}}>
          <div className="fs-1"><BsCloudSlash /></div>
          <h3>Data Not Found</h3>
          <p className='mt-3 fs-5'>Error occured while fetching the data. Please try after some time, we are working on the problem.</p>
        </div>
      </div>
    )
  }
}

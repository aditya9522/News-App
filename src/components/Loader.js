import React, { Component } from 'react'

export class Loader extends Component {
  render() {
    return (
      <div>
        <div className='' style={{height:'600px', display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center'}}>
            <div className="spinner-border text-primary" role="status" style={{width:'50px', height:'50px'}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
      </div>
    )
  }
}

export default Loader
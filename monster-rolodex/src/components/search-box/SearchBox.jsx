import React, { Component } from 'react'
import "./style.css"
export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input 
            type="search" 
            className={this.props.className}
            placeholder={this.props.placeHolder}
            onChange={this.props.onChangeHandler}
        />
      </div>
    )
  }
}

import React, { Component } from 'react'
import './style.css'
export default class Card extends Component {
  render() {
    return (
      <div className='card-container' key={this.props.data.id}>
        <img src={`https://robohash.org/${this.props.data.id}?set=set2&size=180x180`} alt={`monster ${this.props.data.name}`} />
        <h1>{this.props.data.name}</h1>
        <p>{this.props.data.email}</p>
      </div>
    )
  }
}

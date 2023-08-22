import React, { Component } from 'react'
import Card from '../card/Card'
import './style.css'
export default class CardList extends Component {
  render() {
    const {monsters} = this.props
    return (
      <div className='card-list'>
        {monsters.map((monster)=>{
            return <Card data={monster} />
        })}
      </div>
    )
  }
}

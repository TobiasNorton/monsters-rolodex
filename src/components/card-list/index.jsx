import React from 'react'
import './style.css'
import Card from '../card'

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}

export default CardList

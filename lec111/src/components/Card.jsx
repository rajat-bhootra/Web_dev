import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <span>By UserId : {props.userId}</span>
    </div>
  )
}

export default Card

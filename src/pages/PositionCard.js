import React from 'react';
import "./PositionCard.css"
const PositionCard = (props) => {
  return (
    <div className="card">
      <div className="info" style={{color: "#8DC8FF", fontWeight:"bolder", fontSize:"18px"}}> {props.title} </div>
      <div className="info"> {props.department} </div>
      <div className="info"> {props.description}</div>
      <div className="info"> {props.paid ? '$ Paid' : 'Unpaid'}</div>
      <div className="info"> {`Last updated: ${props.last_updated}`}</div>
    </div>
  )
}
export {PositionCard }

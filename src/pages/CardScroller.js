import React from 'react';
import "./CardScroller.css";
import { PositionCard } from "./PositionCard.js"

const CardScroller = (props) => {
    return (

      <div className="card-container">
        <div style={{fontWeight:"700",marginBottom:"10px", fontSize:"20px"}}> Positions </div>
        <div className="cards">
          {props.cards.map((card) =>
            <PositionCard
              title={card.title}
              department={card.department}
              description={card.description}
              paid={card.paid}
              last_updated={card.last_updated}
            />)}
        </div>
      </div>
    )
}

export {CardScroller }

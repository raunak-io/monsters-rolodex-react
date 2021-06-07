import React from "react";
import "./card-list.styles.css";
import {Card} from './../card/card.component'
export const CardsList = (props) => {
  // console.log("props here in card list", props);
  return (
    <div className="card-list">
        
      {props.monsters.map((el) => (
       <Card monster ={el} key = {el.id} />
      ))}
    </div>
  );
};

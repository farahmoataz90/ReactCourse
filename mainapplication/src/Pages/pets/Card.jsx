import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div>
            <div className="p-3">
        <div class="card position-relative" >
        <div>
            <img src={props.image} class="card-img-top img" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.category}</p>
            <p class="card-text">{props.age}</p>
         </div>
         

            <Link to={"/info"}>
             <button class="btn bcolor position-absolute top-0 end-0 m-3" >View</button>
             </Link>
             </div>
        </div>
      </div>
      </div>
  )
}

export default Card
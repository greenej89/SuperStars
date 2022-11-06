import React from 'react'
import { NavLink } from 'react-router-dom'


const KidMenu = ({kidList, setKidList}) => {

  //NavLink active class name
  let activeClassName = "active";


  return (
    <div className="sidebar text-white d-flex flex-column align-items-center mb-5">
      <div className="kid-menu">
        {
          kidList.slice(0).reverse().map(kid => (
            <NavLink to={`/kids/${kid._id}`} key={kid._id} className={({ isActive }) => isActive ? activeClassName : undefined} >
              <img className="kid-photo img-fluid" src={`${kid.imageURL}`} alt={`${kid.name}`}/>
              <p>{`${kid.name}`}</p>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default KidMenu
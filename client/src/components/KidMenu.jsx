import React from 'react'
import { NavLink } from 'react-router-dom'


const KidMenu = () => {

  let activeClassName = "active";
  return (
    <div className="sidebar text-white d-flex flex-column align-items-center">
      <div className="kid-menu">
          <NavLink to='/kids/1' className={({ isActive }) => isActive ? activeClassName : undefined} >
              <img className="kid-photo img-fluid" src="https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg" alt=""/>
              <p>Caleb</p>
          </NavLink>
          <NavLink to='/kids/2' className={({ isActive }) => isActive ? activeClassName : undefined} >
              <img className="kid-photo img-fluid" src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" alt=""/>
              <p>Noah</p>
          </NavLink>
          <NavLink to='/kids/3' className={({ isActive }) => isActive ? activeClassName : undefined} >
              <img className="kid-photo img-fluid" src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" alt=""/>
              <p>Third</p>
          </NavLink>
          <NavLink to='/kids/4' className={({ isActive }) => isActive ? activeClassName : undefined} >
              <img className="kid-photo img-fluid" src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" alt=""/>
              <p>Fourth</p>
          </NavLink>
          <NavLink to='/kids/5' className={({ isActive }) => isActive ? activeClassName : undefined} >
              <img className="kid-photo img-fluid" src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" alt=""/>
              <p>Fifth</p>
          </NavLink>
      </div>
    </div>
  )
}

export default KidMenu
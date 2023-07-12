import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../../UserContex/UserContex';

const Header = () => {

  const {users, logOut} = useContext(AuthContex)
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link to={'/home'}>Home</Link>

            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1">
          <NavLink to={'/home'}>Home</NavLink>

          {users?.uid ?
            <Link  className={' ms-5'}  onClick={logOut}>Logout</Link>
            :
            <> <NavLink  className={' ms-5'}  to={'/login'}>Login</NavLink>
          <NavLink  className={' ms-5'}  to={'/register'}>Register</NavLink></>
           }


        </div>
      </div>

      <div className="navbar-end">
        <div className=' me-5'>
          <p>{ users?.displayName}</p>
        </div>
        <div className="avatar">
          <div className=" w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://st4.depositphotos.com/36066904/38346/v/450/depositphotos_383467124-stock-illustration-hacker-laptop-computer-try-steal.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import propTypes from 'prop-types';
import { SearchIcon } from '@heroicons/react/solid';

const Header = (props) => {
  return (
    <div className="navbar bg-slate-200 flex justify-between">
      <div className="brand-title">
        <Link className="btn btn-ghost normal-case font-bold text-2xl" to="/">{props.title}</Link>
      </div>

      {/* search bar */}
      {props.searchBar ? <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square">
            <SearchIcon className="h-6 w-6"></SearchIcon>
          </button>
        </div>
      </div> : "" }


      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export {
  Header
}

Header.defaultProps = {
  title: "Your title here",
  searchBar: true,
}

Header.propTypes = {
  title: propTypes.string,
  searchBar: propTypes.bool.isRequired,
}
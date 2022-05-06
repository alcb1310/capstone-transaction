import {  Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>
        <Link to='/'>Pic Some</Link>
      </h2>
      <Link to='/cart'>
        <i className="ri-shopping-cart-line"></i>
      </Link>
    </header>
  );
}

export default Header;

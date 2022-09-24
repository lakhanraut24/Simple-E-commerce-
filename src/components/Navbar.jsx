import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../Global/CartContext";
const Navbar = () => {
  const {qty} = useContext(CartContext);
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">IndExpressStore</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="Cart">
            <span className="shopping-cart">
              <i class="fa-sharp fa-solid fa-cart-plus"></i>
              <span className="cart-counter">{qty}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

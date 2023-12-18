import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import items from "./data";
import { useNavigate } from "react-router-dom";

import { FaCartArrowDown } from "react-icons/fa";

export const Navbar = ({ setData, cart }) => {
  //  console.log(useLocation());

  const location = useLocation();

  const navigate = useNavigate();

  const [search, setSearch] = useState([]);

  const filterByCategory = (category) => {
    const elem = items.filter((product) => product.category === category);
    // console.log(elem);
    setData(elem);
  };

  const filterByPrice = (price) => {
    const resultedElement = items.filter((product) => product.price >= price);
    console.log(resultedElement);
    setData(resultedElement);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch("");
  };
  return (
    <>
      <header className="sticky-top">
        <div className="navbar">
          <Link to="/" className="brand">
            <img
              src="https://i.pinimg.com/originals/ce/56/99/ce5699233cbc0f142250b520d967dff7.png"
              className="brand" alt=""
              onClick={() => setData(items)}
            ></img>
            <h3>SHOPPER</h3>
          </Link>
          <form onSubmit={handleSubmit} className="search-bar text-center ">
            <input
              type="text"
              placeholder="search product"
              onChange={(event) => setSearch(event.target.value)}
            ></input>
          </form>

          <Link to="/cart" className="cart">
            <div className="cart">
              <button
                type="button"
                className="btn btn-primary position-relative"
                style={{ fontSize: "1.7rem" }}
              >
                <FaCartArrowDown />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  {/* <span className="visually-hidden">unread messages</span> */}
                </span>
              </button>
            </div>
          </Link>
        </div>
        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            {/* <div className='items'>Filter </div> */}
            {/* <div className='items'onClick={()=>setData(items)}>No filter</div> */}
            <div className="items" onClick={() => filterByCategory("mobiles")}>
              Mobiles
            </div>
            <div className="items" onClick={() => filterByCategory("laptops")}>
              laptops
            </div>
            <div className="items" onClick={() => filterByCategory("tablets")}>
              Tablets
            </div>
            <div className="items" onClick={() => filterByPrice(30000)}>
              {">="}30000
            </div>
            <div className="items" onClick={() => filterByPrice(50000)}>
              {">="} 50000
            </div>
            <div className="items" onClick={() => filterByPrice(77000)}>
              {">="} 77000
            </div>
            <div className="items" onClick={() => filterByPrice(90000)}>
              {">="} 90000
            </div>
          </div>
        )}
      </header>
    </>
  );
};

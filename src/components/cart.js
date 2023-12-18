import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const totalPrice = 50000;
  const data = { totalPrice: totalPrice };
  return (
    <>
      {cart.length === 0 ? (
        <div className="text-center ">
          <h1>Card is null</h1>
          <Link to="/">
            <button type="submit" className="btn btn-warning mx-3">
              Continue shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className=" container my-5 text-center" style={{ width: "36%" }}>
          {cart.map((product) => {
            return (
              <>
                <div
                  className="card mb-3 text-center my-4 "
                  style={{ width: "700px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4 ">
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 text-center">
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>

                        <button type="submit" className="btn btn-primary mx-3">
                          {product.price}
                        </button>
                        <button
                          type="submit"
                          className="btn btn-secondary my-3"
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="container text-center ">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => setCart("")}
            >
              Clear Out
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Cart;

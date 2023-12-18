import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./products";
import items from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ setCart, cart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    console.log(filterProduct);
    // setProduct(filterProduct[1]);
    setProduct(filterProduct[0]);

    const relatedProduct = items.filter(
      (product) => product.category === product.category
    );
    console.log("realted prpducts=", relatedProduct);
    setRelatedProduct(relatedProduct);
  }, [id, product.category]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const object = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, object]);
    toast.success("Item is add to cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="container con ">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">
            {product.price}
            {"$"}
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              );
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Products cart={cart} setCart={setCart} items={relatedProduct} />
    </>
  );
};

export default ProductDetail;

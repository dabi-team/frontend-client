import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./style.scss";
import logo from "../../logo.svg";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProductById } from "../../redux/product/product_api_slice";
import { addToBuy } from "../../redux/buy_now/buy_now_api_slice";

const Product = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.product.product);
  const user = useAppSelector((state) => state.auth.auth);

  //  const { id }: any = useParams();
  const id: any = useParams();
  useEffect(() => {
    dispatch(fetchProductById(id.id));
  }, []);
  const addToCartLis = (productId: string) => {
    dispatch(
      addToBuy({
        userId: user?.user._id!,
        productId: productId,
      })
    );
  };
  const location = useLocation();
  return (
    <div className="nav-container">
      <div className="white-card-container shadow-lg ">
        <img src={products.images[0]} alt="laptop" />
        <div className="grid grid-flow-row gap-4 p-20 m-7">
          {/* <div className="text-xl p-2">Lenovo laptop</div> */}
          <div className="text-xl p-2">{products.title}</div>
          <div className="text-xl p-2">{products.description} </div>
          <div className="text-xl p-2">{products.price}</div>
          <div className="flex">
            <button onClick={() => addToCartLis(products._id)}>Now Buy</button>
            <button className="flex">
              <BsFillCartPlusFill className="mr-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

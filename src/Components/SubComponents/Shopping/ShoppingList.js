import React, { useEffect } from "react";
import Anniversary from "../../../images/Anniversary.jpeg";
import Birthday from "../../../images/Birthday.webp";
import Cake from "../../../images/cake.jpeg";
import ShoppingItem from "./ShoppingItem";
import {useDispatch, useSelector} from "react-redux";
import { getAllProducts } from "../../../features/product/productSlice";
import Spinner from "../../ReusableComponents/Spinner";
import HoriLine from "../../ReusableComponents/HoriLine";

const ShoppingList = () => {

  const dispatch = useDispatch();
  const {products , isLoading} = useSelector((state)=>{return state.product})

  useEffect(()=>{
    getProducts();
  },[])

  const getProducts = () => {
    dispatch(getAllProducts());
  }

  const renderedShoppingList = products?.map((shoppingItem) => {
    return (
      <div key={shoppingItem._id}>
        <ShoppingItem shoppingItem={shoppingItem} />
      </div>
    );
  });
  return (
    <>
      {isLoading && <div className="flex justify-center my-12"><Spinner/></div>}
      {!isLoading && (
        <div className="bg-[#090b2b] flex flex-row flex-wrap justify-center items-center p-6">
          {renderedShoppingList}
        </div>
      )}
      <HoriLine/>
    </>
  );
};

export default ShoppingList;

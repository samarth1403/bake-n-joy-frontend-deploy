import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Anniversary from "../../../images/Anniversary.jpeg";
import Birthday from "../../../images/Birthday.webp";
import Cake from "../../../images/cake.jpeg";
import WishListItem from "./WishListItem";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistOfUser } from "../../../features/user/userSlice";
import Spinner from "../../ReusableComponents/Spinner";
import HoriLine from "../../ReusableComponents/HoriLine";

const WishList = () => {
  const dispatch = useDispatch();
  const { Token } = useSelector((state) => state.user);

  useEffect(() => {
    getWishlist();
  }, []);

  const getWishlist = () => {
    if(Token !== undefined){
      dispatch(getWishlistOfUser({ Token: Token }));
    }
  };

  const { gotWishlistOfUser , isLoading} = useSelector((state) => {
    return state.user;
  });

  const renderedWishList = gotWishlistOfUser?.wishList?.map((wishlistItem) => {
    return (
      <div key={wishlistItem?._id}>
        <WishListItem wishlistItem={wishlistItem} />
      </div>
    );
  });
  return (
    <>
      <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] f text-4xl p-4">
        {gotWishlistOfUser?.wishList?.length === 0 ? (
          <p className="font-normal text-4xl">Your Wishlist is Empty</p>
        ) : (
          "Your WishList"
        )}
      </p>
      {isLoading && gotWishlistOfUser?.wishList?.length > 0 && (
        <div className="flex justify-center my-6">
          <Spinner />
        </div>
      )}

      {!isLoading && (
        <div className="bg-[#0D103C] flex flex-row flex-wrap justify-center items-center p-6">
          {renderedWishList}
        </div>
      )}
      <HoriLine/>
    </>
  );
};

export default WishList;

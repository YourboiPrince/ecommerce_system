import React from "react";
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdClose } from "react-icons/io";

const CartItem = ({ item }) => {
  // destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
        <img className="max-w-[80px]" src={image} alt="" />
        {/* title */}
        </Link>
        <div className="w-full flex flex-col">
            {/* title & remove icon */}
            <div>
                <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">{title}</Link>
                {/* remove icon */}
                <div className="text-xl cursor-pointer">
                    <IoMdClose className="text-gray-500 hover:text-red-500 transition"/>
                </div>
               <div className="bg-pink-200">
                 {/* qty */}
                 <div>quantity</div>
                {/* item price */}
                <div>item price</div>
                {/* final price */}
                <div>final price</div>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

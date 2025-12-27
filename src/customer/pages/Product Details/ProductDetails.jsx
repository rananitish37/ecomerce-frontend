import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Button, Divider } from "@mui/material";
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex lg:flex-row gap-5">
          <div className="flex flex-wrap gap-3 lg:flex-col lg:w-[15%]">
            {[1, 1, 1, 1].map((item, index) => (
              <img
                key={index}
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727451187/SoftSilkZariBanarasiSaree_1_fwms3w.jpg"
                alt={`thumb-${index}`}
              />
            ))}
          </div>

          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727451205/SoftSilkZariBanarasiSaree_4_fyohzg.jpg"
              alt="main"
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color">
            Kuntiputra Clothing
          </h1>
          <p className="text-gray-500 font-semibold ">Woman saree</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: "#003366", fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>232 Ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₹ 400</span>
              <span className="line-through text-gray-400">₹ 900</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
            <p className="text-sm">
              Inclusive of all texes. Free shipping above ₹1500.
            </p>
          </div>
          <div className="mt-7 space-y-3">
            <div className="flex item-center gap-4">
              <Shield sx={{ color: "#003366" }} />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className="flex item-center gap-4">
              <WorkspacePremium sx={{ color: "#003366" }} />
              <p>100% money back guarantee</p>
            </div>
            <div className="flex item-center gap-4">
              <LocalShipping sx={{ color: "#003366" }} />
              <p>Free shipping & return </p>
            </div>
            <div className="flex item-center gap-4">
              <Wallet sx={{ color: "#003366" }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1>QUANTITY</h1>
            <div className="item-center justify-between w-[140px] gap-2">
              <Button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex item-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Add to Bag
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Wishlist
            </Button>
          </div>
          <div className="mt-5">
            <p>
              Elegantly crafted, this saree blends timeless tradition with
              modern style. Made from premium fabric, it offers a graceful drape
              and exquisite design—perfect for any special occasion or festive
              celebration.
            </p>
          </div>
          <div className="mt-12 space-y-7">
            <ReviewCard/>
            <Divider />
          </div>
        </section>
      </div>
      <div className="mt-20 ">
        <h1 className="text-lg font-bold">Similar Product</h1>
        <div className="pt-5">
          <SimilarProduct/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

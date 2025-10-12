import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { Divider } from "@mui/material";

const ProductDetails = () => {
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727451187/SoftSilkZariBanarasiSaree_1_fwms3w.jpg"
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727451205/SoftSilkZariBanarasiSaree_4_fyohzg.jpg"
              alt=""
            />
          </div>
        </section>

        <section>
            <h1 className="font-bold text-lg text-primary-color">Kuntiputra Clothing</h1>
            <p className="text-gray-500 font-semibold ">men black shirt</p>
            <div className="flex justify-between items-center py-2 border w-[180px] px-3 pt-5">
                <div className="flex gap-1 items-center">
                    <span>4</span>
                    <StarIcon sx={{color:"#003366", fontSize:"17px"}}/>
                </div>
                <Divider orientation="vertical" flexItem/>
                <span>232 Ratings</span>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;

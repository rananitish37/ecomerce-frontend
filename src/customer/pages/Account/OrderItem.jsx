import { Avatar } from "@mui/material";
import { ElectricBolt } from "@mui/icons-material";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: "#003366" }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving By Mon, 12 jan</p>
        </div>
      </div>
      <div className="p-5 bg-blue-50 flex gap-3 ">
        <div>
          <img className="w-[70px]"
            src="https://res.cloudinary.com/dxoqwusir/image/upload/v1727452042/pro-ray-android-ios-cellecor-yes-original-imagydnsrany7qhy_1_m9n9t5.webp"
            alt=""
          />
        </div>
        <div className="w-full space-y-2 ">
            <h1 className="font-bold">Kp Clothing</h1>
            <p>Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD | BT-Calling | AI Voice | Split Screen Smartwatch (Black Strap, Free Size)</p>
            <p>
                <strong>size : </strong>
                FREE
            </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

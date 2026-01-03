import Button from "@mui/material/Button";
import React, { useState } from "react";
import AddressCard from "./AddressCard";
import {
  Box,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import AddressForm from "./AddressForm";
import PricingCart from "../Cart/PricingCart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const paymentGatewayList = [
  {
    value: "RAZORPAY",
    image: "https://financialit.net/sites/default/files/razorpay_0.jpg",
    label: "",
  },
  {
    value: "STRIPE",
    image:"data:image/png;base64,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",
    label: "",
  },
];

const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");

  const handlePaymentChange = (event) =>{
    setPaymentGateway(event.target.value);
  };

  return (
    <>
      <div>
        {/* <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'> */}
        <div className="pt-10 px-60 min-h-screen">
  {/* Main grid container */}
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 space-y-5 lg:space-y-0">
    
    {/* LEFT: Addresses - col-span-full on mobile, full left on lg */}
    <div className="lg:col-span-1 space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">Select Address</h1>
        <Button onClick={handleOpen}>Add new Address</Button>
      </div>
      
      <div className="text-xs font-medium space-y-5">
        <p>Saved Addresses</p>
        <div className="space-y-3">
          {[1,1,1].map((item, idx) => <AddressCard key={idx} />)}
        </div>
      </div>
      
      <div className="py-4 px-5 rounded-md border">
        <Button onClick={handleOpen}>Add new Address</Button>
      </div>
    </div>
    
    {/* RIGHT: Payments + Cart + Checkout */}
    <div className="lg:col-span-1 border rounded-md p-4 space-y-4">
      {/* Payments */}
      <RadioGroup
        row
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 1,
        }}
        onChange={handlePaymentChange}
        value={paymentGateway}
      >
        {paymentGatewayList.map((item) => (
          <FormControlLabel
          className="border w-[45%] pr-2 rounded-md flex justify-center"
            key={item.value}
            sx={{ flex: 1 }}  // ← Even width
            value={item.value}
            control={<Radio />}
            label={
              <img 
                className="w-full h-12 object-contain" 
                src={item.image} 
                alt={item.label} 
              />
            }
          />
        ))}
      </RadioGroup>
      
      <PricingCart />
      
      <Button fullWidth variant="contained" sx={{ py: "11px" }}>
        Checkout
      </Button>
    </div>
  </div>
</div>

      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            id="modal-modal-description"
            sx={{ mt: 2, width: "100%", display: "block" }}
          >
            <AddressForm />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;

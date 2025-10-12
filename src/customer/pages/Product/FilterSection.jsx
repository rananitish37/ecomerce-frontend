import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../../data/Filters/colors";
import { price } from "../../../data/Filters/price";
import { useSearchParams } from "react-router-dom";

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);
  const [searchParam,setSearchParams] = useSearchParams();
  const handleColorToggle = () => {
    setExpendColor(!expendColor);
  };
  const updateFilterParams=(e)=>{
    const {value,name}=e.target;

    if(value){
      searchParam.set(name,value);
    }else{
      searchParam.delete(name);
    }
    setSearchParams(searchParam);
  };

  const clearAllFilters=()=>{
    console.log("ClearAllFilters",searchParam)
    searchParam.forEach((value,key)=>{
      searchParam.delete(key);
    });
    setSearchParams(searchParam);
  }

  return (
    <div className="-z-50 space-y-5 bg-white ">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r ">
        <p className="text-lg font-semibold ">Filters</p>
        <Button
          size="small"
          className="text-primary-color cursor-pointer font-semibold"
        >
          clear all
        </Button>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#003366",
                pb: "14px",
              }}
              className="text-2xl font-semibold "
              id="color"
            >
              Color
            </FormLabel>
            <RadioGroup aria-labelledby="color" defaultValue="" name="color">
              {colors.slice(0, expendColor ? colors.length : 5).map((item) => (
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3 ">
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full ${
                          item.name === "white" ? "border" : ""
                        }`}
                      ></p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={handleColorToggle}
              className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center"
            >
              {expendColor ? "hide" : `+${colors.length - 5} more`}
            </button>
          </div>
        </section>
        {/* for price */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#003366",
                pb: "14px",
              }}
              className="text-2xl font-semibold "
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup aria-labelledby="price" defaultValue="" name="price" onClick={updateFilterParams}>
              {price.map((item) => (
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3 ">
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full ${
                          item.name === "white" ? "border" : ""
                        }`}
                      ></p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

        {/* for discount */}
      </div>
    </div>
  );
};

export default FilterSection;

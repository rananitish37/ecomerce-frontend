import { Key } from "@mui/icons-material";
import PropTypes from "prop-types";
import { Divider } from "@mui/material";
import React from "react";

const ProfileFeildCard = ({ keys, value }) => {
  return (
    <div className="p-5 flex items-center bg-slate-50">
      {/* <p className='w-20 lg:w-36 pr-5 '>{keys}</p> */}
      <p className="w-36 pr-5 ">{keys}</p>
      <Divider flexItem orientation="vertical" />
      <p className="pl-4 lg:pl-10 font-semibold lg:text-lg">{value}</p>
    </div>
  );
};
ProfileFeildCard.propTypes = {
  keys: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProfileFeildCard;

import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

SortPrice.propTypes = {
  currentValue: PropTypes.string,
  onChange: PropTypes.func,
};

function SortPrice({ currentValue, onChange }) {
  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs
      value={currentValue}
      onChange={handleSortChange}
      textColor="primary"
      indicatorColor="primary"
      aria-label="wrapped label tabs example"
    >
      <Tab label="giá giảm dần" value="salePrice:DESC" />

      <Tab label="giá tăng dần" value="salePrice:ASC" />
    </Tabs>
  );
}

export default SortPrice;

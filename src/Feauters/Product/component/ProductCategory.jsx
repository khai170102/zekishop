import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import FillterProduct from "./Fillter/FillterProduct";
import FillterPrice from "./Fillter/FillterPrice";
import FillterCheckBox from "./Fillter/FillterCheckBox";

ProductCategory.propTypes = {
  fillter: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductCategory({ fillter, onChange }) {
  const handleCategoryChange = (newId) => {
    const newFillter = {
      "category.id": newId,
    };
    onChange(newFillter);
  };
  const handleChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <Box>
      <FillterProduct onChange={handleCategoryChange} />
      <FillterPrice onChange={handleChange} />
      <FillterCheckBox fillter={fillter} onChange={handleChange} />
    </Box>
  );
}

export default ProductCategory;

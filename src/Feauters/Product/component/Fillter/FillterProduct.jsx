import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import categoryApi from "../../../../api/categoryApi";

FillterProduct.propTypes = {
  onChange: PropTypes.func,
};

function FillterProduct({ onChange }) {
  const [categoryProduct, setcategoryProduct] = useState([]);
  useEffect(() => {
    (async () => {
      const list = await categoryApi.getAll();
      setcategoryProduct(list);
    })();
  }, []);
  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          color: "text.secondary",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          mx: 0.5,
          fontSize: 17,
          pt: "10px",
        }}
      >
        Danh sách sản phẩm
      </Typography>

      <Tabs
        sx={{
          pt: "5px",
        }}
        orientation="vertical"
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        {categoryProduct.map((category) => (
          <Tab
            key={category.id}
            label={category.name}
            onClick={() => handleCategoryClick(category)}
          ></Tab>
        ))}
      </Tabs>
    </Box>
  );
}

export default FillterProduct;

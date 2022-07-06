import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumnailURL = product.thumbnail
    ? `https://api.ezfrontend.com${product.thumbnail?.url}`
    : `http://www.awwwards.com/awards/images/2012/05/cassanet_font.jpg`;
  return (
    <Box padding={1}>
      <Box
        component="img"
        sx={{ objectFit: "cover", width: "100%", height: "250px" }}
        src={thumnailURL}
        alt={product.name}
      ></Box>
      <Box padding={1}>
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box
            sx={{
              fontWeight: "bold",
              display: "inline",
              fontSize: 18,
            }}
          >
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ``}
        </Typography>
      </Box>
    </Box>
  );
}

export default Product;

import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

FillterPrice.propTypes = {
  onChange: PropTypes.func,
};

function FillterPrice({ onChange }) {
  const [value, setValue] = useState({
    salePrice_gte: "",
    salePrice_lte: "",
  });
  const [valueError, setValueError] = useState(false);
  const current = 1;

  const handlePrice = (e) => {
    const { name, value } = e.target;
    setValue((pr) => ({
      ...pr,
      [name]: value,
    }));
  };
  const handleSummit = (e) => {
    e.preventDefault();
    setValueError(false);
    if (value.salePrice_gte === "" || value.salePrice_gte < 1000) {
      current = 0;
      setValueError(true);
    }
    if (
      value.salePrice_lte === "" ||
      value.salePrice_lte < value.salePrice_gte
    ) {
      setValueError(true);
      current = 0;
    }
    if (current === 1) {
      onChange(value);
      setValue({ salePrice_gte: "", salePrice_lte: "" });
    }
  };
  return (
    <Box>
      <Typography
        sx={{
          color: "text.secondary",

          fontWeight: "bold",
          mx: 0.5,
          fontSize: 17,
          pt: "10px",
          pb: "10px",
        }}
      >
        Khoảng giá
      </Typography>
      <Box sx={{ p: "10px" }}>
        <TextField
          id="outlined-basic"
          label="gte"
          variant="outlined"
          name="salePrice_gte"
          value={value.salePrice_gte}
          onChange={handlePrice}
          required
          error={valueError}
        />
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          -
        </Typography>
        <TextField
          onChange={handlePrice}
          id="outlined-basic"
          label="lte"
          variant="outlined"
          name="salePrice_lte"
          value={value.salePrice_lte}
          required
          error={valueError}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: "10px",
          pb: "10px",
        }}
      >
        <Button variant="outlined" onClick={handleSummit}>
          Áp dụng
        </Button>
      </Box>
    </Box>
  );
}

export default FillterPrice;

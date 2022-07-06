import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

FillterCheckBox.propTypes = {
  onChange: PropTypes.func,
  fillter: PropTypes.object,
};

function FillterCheckBox({ onChange, fillter = {} }) {
  const hadleCheckBox = (e) => {
    const { name, checked } = e.target;
    onChange({ [name]: checked });
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
        Dịch vụ
      </Typography>
      <Box sx={{ p: "10px" }}>
        {[
          { value: "isPromotion", label: "Có khuyến mãi" },
          { value: "isFreeShip", label: "Miễn phí vận chuyển" },
        ].map((service) => (
          <Box key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(fillter[service.value])}
                  onChange={hadleCheckBox}
                  name={service.value}
                />
              }
              label={service.label}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FillterCheckBox;

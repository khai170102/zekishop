import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  Box,
  Container,
  Grid,
  IconButton,
  Pagination,
  Paper,
} from "@mui/material";
import productApi from "../../../api/productApi";

import ProductSkeletonList from "../component/ProductSkeletonList";
import ProductList from "../component/ProductList";
import SortPrice from "../component/SortPrice";
import ProductCategory from "../component/ProductCategory";

import ViewFillter from "../component/ViewFillter";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

Listpage.propTypes = {};

function Listpage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [fillter, setFillter] = useState({
    _page: 1,
    _limit: 12,
  });

  useEffect(() => {
    setLoading(true);
    try {
      (async () => {
        const { data, pagination } = await productApi.getAll(fillter);
        setProductList(data);
        setPagination(pagination);
        setLoading(false);
      })();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [fillter]);
  const handlePagination = (e, page) => {
    setFillter((prevFillter) => ({
      ...prevFillter,
      _page: page,
    }));
  };
  const handleSortChange = (newValue) => {
    setFillter((prevFillter) => ({
      ...prevFillter,
      _sort: newValue,
    }));
  };
  const handleFillterChange = (newFillter) => {
    setFillter((prevFillter) => ({
      ...prevFillter,
      ...newFillter,
    }));
  };
  const handleHomeChange = () => {
    setFillter({
      _page: 1,
      _limit: 12,
    });
  };
  const setNewFilter = (newViewFillter) => {
    setFillter(newViewFillter);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Paper elevation={2}>
              <ProductCategory
                fillter={fillter}
                onChange={handleFillterChange}
              />
            </Paper>
          </Grid>

          <Grid item xs={10}>
            <Paper elevation={2}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateRows: "auto",
                  gap: 1,
                }}
              >
                <SortPrice
                  currentValue={fillter._sort}
                  onChange={handleSortChange}
                  sx={{ gridRow: "1", gridColumn: "4 / 5", gridArea: "sort" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <IconButton
                  aria-label="home"
                  onClick={handleHomeChange}
                  color="primary"
                >
                  <HomeOutlinedIcon />
                </IconButton>
                <ViewFillter fillter={fillter} onChange={setNewFilter} />
              </Box>

              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}
              <Pagination
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination._page}
                color="primary"
                variant="outlined"
                shape="rounded"
                onChange={handlePagination}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "32px",
                  pb: "20px",
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Listpage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Note: Check if Grid2 is now stable in your version of MUI and update if necessary
import Typography from '@mui/material/Typography';

import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';

export default function ProductsView() {
  const [products, setProducts] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const userToken = localStorage.getItem('userToken');
      try {
        const response = await axios.get('http://localhost:5000/api/nfts/', {
          headers: { 'x-access-token': userToken }
        });
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Expected an array of products, but got:", response.data);
          setProducts([]);  // Ensures products is always an array
        }
        console.log('Products:', response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setProducts([]);  // Ensures products is always an array on fetch error
      }
    };

    fetchProducts();
  }, []);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >

      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}

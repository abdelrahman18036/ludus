import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import Label from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';

export default function ShopProductCard({ product }) {
  const renderStatus = product.status ? (
    <Label
      variant="filled"
      color={product.status === 'sale' ? 'error' : 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {product.status}
    </Label>
  ) : null;

  const renderImg = (
    <Box
      component="img"
      alt={product.name || 'Product Image'}
      src={product.imageUrl || '/default-product.jpg'} // Provide a default image path
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      {product.priceSale && (
        <span
          style={{
            color: 'text.disabled',
            textDecoration: 'line-through',
          }}
        >
          {fCurrency(product.priceSale)}
        </span>
      )}
      &nbsp;{fCurrency(product.price)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {renderStatus}
        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name || 'Product Name'}
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {product.colors && <ColorPreview colors={product.colors} />}
          {renderPrice}
        </Stack>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.shape({
    status: PropTypes.string,
    name: PropTypes.string,
    cover: PropTypes.string,
    priceSale: PropTypes.number,
    price: PropTypes.number.isRequired,
    colors: PropTypes.array
  }),
};

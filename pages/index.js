import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  TextField,
} from '@material-ui/core';
import Layout from '../components/Layout';
import data from '../utils/data';
import NextLink from 'next/link';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box } from '@mui/system';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

export default function Home() {
  return (
    <Layout>
      <Box m={2} pt={3}>
        <Box>
          <TextField
            fullWidth
            variant="outlined"
            label="Looking for something"
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <h1 align="center">Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={3} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                      height="250"
                    ></CardMedia>
                    <CardContent>
                      <Typography variant="h6" align="center">
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button variant="outlined" color="secondary">
                    <AddShoppingCartIcon /> Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

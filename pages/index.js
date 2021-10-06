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
import SearchBar from '../components/SearchBar';

export default function Home() {
  // const suggestions = ['Pizza', 'Pasta', 'Beef', 'Pork', 'Sausage'];
  return (
    <Layout>
      <Box m={2} pt={3}>
        <SearchBar suggestions={data.products} />
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
          ,
        </Grid>
      </Box>
    </Layout>
  );
}

import { useRouter } from 'next/router';
import { getProductsByCategory } from '../api/products/[category]';
import Layout from '../../components/Layout';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@material-ui/core';
import NextLink from 'next/link';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchBar from '../../components/SearchBar';
import data from '../../utils/data';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <Layout>
      <Box m={2} pt={3}>
        <h1 align="center">Results for {router.query.category}</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
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
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}

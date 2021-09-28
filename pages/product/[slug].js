import { Link } from '@material-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import data from '../../utils/data';

export default function product() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }
  return (
    <Layout title={product.name}>
      <div>
        <NextLink href="/" passHref>
          <Link>Go back to homepage</Link>
        </NextLink>
      </div>
    </Layout>
  );
}

import data from '../../../utils/data';

export function getProduct() {
  return data;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const product = getProduct();
    res.status(200).json(product);
  }
}

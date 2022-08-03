import * as React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';


const ProductInformation = () => {
  const { id } = useParams();
  const [product, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:8000/items/${id}`);
      const productDetails = await response.json();
      // isprovokuoja persikrovima
      setData(productDetails);
      console.log(productDetails);
    }

    fetchProduct()

  }, [id]);

  return (
    <Container>
      <Typography variant='h4' component='h4'>Product information {id}</Typography>
      <pre>
        {JSON.stringify(product, null, 4)}
      </pre>
    </Container>
  )
}


export default ProductInformation;

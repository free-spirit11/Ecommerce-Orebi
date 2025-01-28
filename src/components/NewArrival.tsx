'use client';
import Slider from 'react-slick';
import Container from './Container';
import Product from './Product';

const NewArrival = ({ products }: any) => {
  return (
    <Container>
      <div>
        <Slider />
        {products.map((item) => (
          <Product />
        ))}
      </div>
    </Container>
  );
};

export default NewArrival;

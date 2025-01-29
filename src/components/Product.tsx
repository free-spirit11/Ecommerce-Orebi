import Link from 'next/link';
import { ProductProps } from '../../type';
import Image from 'next/image';
import { urlFor } from '@/lib/sanityClient';

interface Props {
  product: ProductProps;
}

const Product = ({ product }: Props) => {
  return (
    <div className='w-full relative group border-[1px] border-black hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group'>
      <div className='w-full h-80 flex items-center justify-center bg-white overflow-hidden'>
        <div>
          <Link href={'/'}>
            <Image
              src={urlFor(product?.image).url()}
              alt='product image'
              width={700}
              height={700}
              className='w-full h-full object-contain'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

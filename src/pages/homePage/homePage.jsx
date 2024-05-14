import React from 'react'
import ProductType from '../../components/type_of_products/ProductType'
import SliderComponent from '../../components/SilderComponent/SliderComponent'
import Slide1 from '../../assets/images/Slide1.png'
import Slide2 from '../../assets/images/Slide2.png'
import Slide3 from '../../assets/images/Slide3.png'
import Slide4 from '../../assets/images/Slide4.png'
import ProductBlock from '../../components/ProductBlock/ProductBlock'
import { WrapperTypeProduct, ButtonHover, WrapperProduct } from './style'
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query'

const HomePage = () => {
  const array = ['Áo', 'Quần ', 'Phụ kiện', 'Balo, túi xách', 'Đồ bơi']
  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct()
    console.log('res', res)
    return res
  }
  const { isLoading, data: products } = useQuery({ queryKey: ['product'], queryFn: fetchProductAll, retry: 3, retryDelay: 1000 });
  console.log('data', products)

  return (
    <>
      <div style={{ padding: '10px 150px', fontSize: '25px' }}>
        <WrapperTypeProduct>
          {array.map((item) => {
            return (
              <ProductType name={item} key={item} />
            )
          })}
        </WrapperTypeProduct>
      </div>
      <div id='main' style={{ padding: '0 150px' }}>
        <SliderComponent arrayImages={[Slide1, Slide2, Slide3, Slide4]} />
        <WrapperProduct>
          {products?.data?.map((product) => {
            return (
              <ProductBlock
                key={product._id}
                countInStock={product.countInStock}
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                type={product.type}
                selled={product.selled}
                id={product._id}
              />
            )
          })}

        </WrapperProduct>
        <div style={{ justifyContent: 'center', display: 'flex', width: '100%' }}>
          <ButtonHover text="Nhấn để xem thêm" type='outline' styleButton={{
            padding: 0,
            margin: '13px 0px',
            border: '1px solid blue',
            color: 'blue',
            height: '40px',
            width: '200px'
          }} styleTextButton={{ fontWeight: 500 }} />
        </div>
      </div>
    </>
  )
}

export default HomePage

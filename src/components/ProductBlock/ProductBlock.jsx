import React from 'react'
import { CardStyle, NameOfProduct, PriceOfProduct, RatingProps } from './style'
import './customCard.css';
import pic1 from '../../assets/images/pic1.jpg';
const ProductBlock = (props) => {
  const { countInStock, description, image, name, price, type, selled, id } = props
  return (
    <div>
      <CardStyle
        hoverable
        style={{ width: 200, height: 'fitContent' }}
        cover={<img alt="example" src={pic1} />}
        className="custom-card"
      >
        <NameOfProduct>{name}</NameOfProduct>
        <RatingProps>
          <span>Đã bán {selled || 1000}+</span>
        </RatingProps>
        <PriceOfProduct>
          {price}
        </PriceOfProduct>
      </CardStyle>
    </div>
  )
}

export default ProductBlock
import { Row, Col, Image } from 'antd';
import React from 'react';
import imageOfProduct from '../../assets/images/pic1.jpg';
import anotherImageProduct from '../../assets/images/small3.jpg';
import { NumberInput, PriceOfProduct, StyleImage, WrapperIcon, WrapperNameProducts, WrapperNumberOfProducts, WrapperTotalSell } from './style';
import { PlusOutlined, MinusOutlined} from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const ProductDetailComponent = () => {
  const onChange = () => {}
  return (
    <Row style={{ marginTop: '20px' }}>
        <Col span={10}>
            <Image src={imageOfProduct} alt="Ảnh sản phẩm" style={{ borderRadius: '19px' }} />
            <Row style={{ marginTop: '3px' }}> 
                <Col span={4}>
                  <StyleImage src={anotherImageProduct} alt="ảnh chi tiết" />
                </Col>
                <Col span={4}>
                  <StyleImage src={anotherImageProduct} alt="ảnh chi tiết" />
                </Col>
                <Col span={4}>
                  <StyleImage src={anotherImageProduct} alt="ảnh chi tiết" />
                </Col>
                <Col span={4}>
                  <StyleImage src={anotherImageProduct} alt="ảnh chi tiết" />
                </Col>
                <Col span={4}>
                  <StyleImage src={anotherImageProduct} alt="ảnh chi tiết" />
                </Col>
                <Col span={4}>
                  <StyleImage src={anotherImageProduct} alt="ảnh chi tiết" />
                </Col>
            </Row>
        </Col>
        <Col span={14} style={{paddingLeft: '25px'}}>
            <WrapperNameProducts>Áo thể dục TDTU</WrapperNameProducts>
            
            <div>
              <PriceOfProduct>95.000đ</PriceOfProduct>
            </div>
            <div>
              <div>Số lượng</div>
              <WrapperNumberOfProducts>
                <WrapperIcon>
                  <MinusOutlined color='{colorButton}' style={{ color: 'black' , fontSize: '20px'}} size ='10px'/>
                </WrapperIcon>
                
                <NumberInput min={1} max={10} defaultValue={3} onChange={onChange} />

                <WrapperIcon>
                  <PlusOutlined  color='{colorButton}' style={{ color: 'black' , fontSize: '20px'}} size ='10px'/>
                </WrapperIcon>
              </WrapperNumberOfProducts>
            </div>
            <div>
              <WrapperTotalSell>Đã bán 1500+</WrapperTotalSell>  
            </div>
            <div>
              <ButtonComponent
                size={50}
                styleButton ={{ background: 'red', width: '250px', height: '60px', marginTop: '10px'}}
                text={'Mua Hàng'}
                styleTextButton={{color: 'white', fontWeight: 'bold', fontSize: '20px'}}
              ></ButtonComponent>

            </div>
        </Col>
    </Row>
  );
};

export default ProductDetailComponent;

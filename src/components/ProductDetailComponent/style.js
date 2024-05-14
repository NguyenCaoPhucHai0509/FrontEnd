import styled from "styled-components";
import { Image, InputNumber } from "antd";

export const StyleImage = styled(Image)`
    width: 60px;
    height: 60px;
`
export const WrapperNameProducts = styled.h1`
    font-size: 35px;
    font-weight: 600;
    line-height: 24px;
    overflow-wrap: break-word;
`
export const PriceOfProduct = styled.span`
    color: red;
    font-size: 30px;
    font-weight: 450;
    text-align: center;
    font-weight: bold;
`


export const WrapperTotalSell = styled.span`
    font-size: 15px,
    line-height: 24px;
`


export const WrapperNumberOfProducts = styled.h3`
    display: flex;
    gap: 5px;
    align-items: center;
    text-align: center;
`

export const NumberInput = styled(InputNumber)`
    width: 33px;
    text-align: center;
    & .ant-input-number-handler-wrap{
        display: none;
    }
`
export const WrapperIcon = styled.span`

`


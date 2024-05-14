import {Row} from 'antd';
import styled from 'styled-components';

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-image: linear-gradient(to right,#471069,#30c5d2);
    align-content: center;
`
export const WrapperTextHeader = styled.span`
    font-size: 20px;
    color: white;
    font-weight: bold;
    align-content: center;
    cursor: pointer;
`
export const WrapperUser = styled.div`
    display: flex;
    align-item: center;
    color: white;
    gap: 8px;
`
export const WrapperTextHeaderSub = styled.span`
    font-size: 13px;
    color: white;
    font-weight: 400;
`
export const WrapperImgHeader = styled.span`
    display: flex;
    align-item: Left;
    width: 200px;
    height: 45px;
`
export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: blue;
    }
`
import React, { useEffect, useState } from 'react';
import { Badge, Col, Popover } from 'antd'
import { WrapperUser, WrapperHeader, WrapperImgHeader, WrapperTextHeader, WrapperTextHeaderSub, WrapperContentPopup } from './style';
import { UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import ButtonSearch from '../../ButtonSearch/ButtonSearch';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService';
import { resetUser } from '../../redux/slides/userSilde';
import Loading from '../../components/LoadingComponent/Loading'
export const HeaderComponent = () => {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await UserService.logoutUser()
    dispatch(resetUser())
  }
  const handleNavigateProfile = () => {
    navigate('/ProfilePage')
  }
  const backToHomePage = () => {
    navigate('/')
  }
  const handleOrderSuccess = () => {
    navigate('/orderSuccess')
  }
  const content = (
    <div>
      <WrapperContentPopup onClick={handleNavigateProfile}>Thông tin khách hàng</WrapperContentPopup>
      <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
      <WrapperContentPopup onClick={handleOrderSuccess}>Đơn hàng</WrapperContentPopup>
      {user?.isAdmin && (
        <WrapperContentPopup onClick={() => navigate('/Admin')}>Quản lí</WrapperContentPopup>
      )}
    </div>
  )

  useEffect(() => {
    setLoading(true)
    setUserName(user?.name)
    setLoading(false)
  }, [user?.name])
  const handleNavigateLogin = () => {
    navigate('/SignInPage')
  }

  console.log('user', user)
  return (
    <div>
      <WrapperHeader gutter={15}>
        <Col span={6}>
          <WrapperImgHeader><img src={logo} alt="Logo" />
            <WrapperTextHeader onClick={backToHomePage}>TDTU SHOP</WrapperTextHeader>
          </WrapperImgHeader>
        </Col>
        <Col span={12}>
          <ButtonSearch
            size="large"
            placeholder="Nhập tên sản phẩm, phân loại, nhóm hàng bạn muốn tìm kiếm"
            text="Tìm kiếm"
          //onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Loading isPending={loading}>
            <WrapperUser>
              <UserOutlined style={{ fontSize: '30px' }} />
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click">
                    <div style={{ cursor: 'pointer' }}>{userName.length ? userName : user.email}</div>
                  </Popover>
                </>
              ) : (
                <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                  <WrapperTextHeaderSub>Đăng Nhập/Đăng Ký</WrapperTextHeaderSub>
                  <div>
                    <WrapperTextHeaderSub>Tài khoản</WrapperTextHeaderSub>
                  </div>
                </div>

              )}
            </WrapperUser>
          </Loading>
          <div>
            <div >
              <Badge count={1} size='medium'>
                <ShoppingOutlined style={{ fontSize: '30px', color: 'white' }} />
              </Badge>
              <WrapperTextHeaderSub>Giỏ Hàng</WrapperTextHeaderSub>
            </div>
          </div>
        </Col>
      </WrapperHeader>
    </div >
  )
}

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logoWhite from '../../assets/images/logo_w.png';
import menuItems from '../../constants/menuItems';
import ModalPopup from '../Modal/index';
import * as SignInAction from '../../screens/account/redux';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [numberFavorite, setNumberFavorite] = useState(0);
  const [itemCart, setItemCart] = useState(0);
  const token = useSelector((state) => state.account?.token);
  const countFavorite = useSelector((state) => state.product?.dataFavorite);
  const dataCart = useSelector((state) => state.product?.dataCart);
  const dispatch = useDispatch();
  const itemsMenu =
    menuItems &&
    menuItems.map((item) => {
      return (
        <li
          key={item.key}
        >
          <Link
            to={'/'}
          
          >
            {item.name}
          </Link>
        </li>
      );
    });

  const handleLogOut = () => {
    dispatch(SignInAction.logOut());
  };

  useEffect(() => {
    if (countFavorite) {
      const data = countFavorite && countFavorite.length;
      setNumberFavorite(data);
    }
  }, [countFavorite]);
  
  useEffect(() => {
    if (dataCart) {
      setItemCart(dataCart && dataCart.length);
    }
  }, [dataCart]);

  return (
    <div
      className="wrapper-header"
    >
      <Container>
        <header className="header-main d-flex  justify-content-between align-items-center">
          <div className="header-main__left">
            <div className="header-main__left__logo mr-4">
              <Link to={'/'}>
                <img src={logoWhite} alt="logo" className="logo-white" />
              </Link>
            </div>
            {token && (
              <div
                className="header-main__left__navigation"
              >
                <ul className="ml-4">
                  {itemsMenu}
                </ul>
              </div>
            )}
          </div>
          <div className="header-main__right">
            <ul className="d-flex align-items-center">
              {token && (
                <>
                  <li
                    key="1"
                  >
                    <span
                      onClick={() => {
                        handleLogOut();
                      }}
                    >
                        Logout
                    </span>
                  </li>
                  <li
                    key="2"
                    className="user ml-3"
                  >
                    <i className="fa fa-user mr-1" aria-hidden="true"></i>
                    Hello Admin
                  </li>
                  <div className="icon heart ml-4">
                    <span>{numberFavorite}</span>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </div>
                  <div className="icon cart ml-4" onClick={() => {
                    setIsOpen(true);
                  }}>
                    <span>{itemCart}</span>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </div>
                </>
              )}
            </ul>
          </div>
        </header>
        <ModalPopup
          isOpen={isOpen}
          isShowFooter
          title="Notification"
          handleClose={() => {
            setIsOpen(false);
          }}
          handleSubmit={() => {
            setIsOpen(false);
            handleLogOut();
          }}
          customClassButton="w-50"
          isShowTwoBtn
          textBtnLeft="Cancel"
          textBtnRight="Ok"
          classNameBtnLeft="w-50"
          classNameBtnRight="w-50"
        >
          <div className="title-content">Please log in</div>
        </ModalPopup>
      </Container>
    </div>
  );
};

export default Header;

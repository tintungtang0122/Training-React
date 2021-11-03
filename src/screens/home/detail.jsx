
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import dataList from '../../constants/mockData';
import PageTitle from '../../components/PageTitle';
import * as ProductAction from './redux';
import ModalPopup from '../../components/Modal';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const dataCartOld = useSelector((state) => state.product?.dataCart);
  const [dataCart, setDataCart] = useState(dataCartOld);
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const dataDetail = dataList && dataList.filter(item => item.id === parseInt(params.id, 10));
  console.log(params, 'params');

  const addToCart = (item) => {
    setDataCart([...dataCart, item]);
  };
  useEffect(() => {
    if (dataCart && dataCart.length > 0) {
      dispatch(ProductAction.addToCart(dataCart));
    }
  }, [dispatch, dataCart]);

  return (
    <>
      <Header />
      <PageTitle title={dataDetail && dataDetail[0].name} image={dataDetail && dataDetail[0].img} />
      <div className="single-product">
        <Container>
          <Row>
            <Col lg={4} xs={12}>
              <div className="imageDetail">
                <img src={dataDetail && dataDetail[0].img} alt="" />
              </div>
            </Col>
            <Col lg={8} xs={12}>
              <div className="infoDetail">
                <h3>{dataDetail && dataDetail[0].name}</h3>
                {dataDetail && dataDetail[0].shortDescription}
                <div className="addToCart mt-4">
                
                  <button className="btn btn-secondary w-auto mr-2" onClick={() => {
                    addToCart(dataDetail);
                  }}>
                    <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                    Add to cart
                  </button>
                  <button className="btn btn-secondary w-auto" onClick={() => {
                    setIsOpen(true);
                  }}>
                    <i className="fa fa-credit-card-alt mr-2" aria-hidden="true"></i>
                    pay now
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={12} className="mb-4">
              <div className="content">
                <h5 className="mt-2">
                  description
                </h5>
                {dataDetail && dataDetail[0].description}
              </div>
            </Col>
          </Row>
          <ModalPopup
            isOpen={isOpen}
            isShowFooter
            icon="icon_x01"
            handleClose={() => {
              setIsOpen(false);
            }}
            handleSubmit={() => {
              setIsOpen(false);
            }}
            textBtnLeft="Confirm"
            classNameBtnLeft="w-100"
          >
            <div className="title-content font-weight-bold mb-1">
              Coming soon
            </div>
          </ModalPopup>
        </Container>
      </div>
      <Footer/>
    </>
  );
};
export default ProductDetail;

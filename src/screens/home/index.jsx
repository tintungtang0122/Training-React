import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import * as ProductAction from './redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import dataList from '../../constants/mockData';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const [dataItem, setDataItem] = useState(dataList);
  const [dataCart, setDataCart] = useState([]);
  const [idListItem, setIdListItem] = useState([]);
  const history = useHistory();
  const handleLike = (val) => {
    console.log(val, 'val');
    const data = dataList.map(item => {
      if (item.id === val) {
        item.isLike = !item.isLike;
      }
      return item;
    });
    setDataItem(data);
    const idx = idListItem && idListItem.indexOf(val);
    if (idx !== -1) {
      const dataItem = idListItem && idListItem.filter(item => item !== val);
      setIdListItem(dataItem);
    } else {
      setIdListItem([...idListItem, val]);
    }
  };

  const addToCart = (item) => {
    setDataCart([...dataCart, item]);
  };

  useEffect(() => {
    if (idListItem && idListItem.length > 0) {
      dispatch(ProductAction.favorite(idListItem));
    }
  }, [idListItem]);
  useEffect(() => {
    if (dataCart && dataCart.length > 0) {
      dispatch(ProductAction.addToCart(dataCart));
    }
  }, [dataCart]);

  const readerList = dataItem && dataItem.map((item) => {
    return (
      <div className="item" key={item?.id}>
        <span className="icon" onClick={() => {
          handleLike(item?.id);
        }}>
          <i className={`fa fa-heart ${item?.isLike ? 'active' : ''}`} aria-hidden="true"></i>
        </span>
        <div className="img" 
          onClick={() => history.push(`/${item.id}`)}
          role="button"
          onKeyDown={() => history.push(`/${item.id}`)}
        >
          <img src={item?.img} alt="" />
        </div>
        <h3 className="title"
          onClick={() => history.push(`/${item.id}`)}
          role="button"
          onKeyDown={() => history.push(`/${item.id}`)}
        >{item?.name}</h3>
        <span className="cart" onClick={() => {
          addToCart(item);
        }}>
          <i className="fa fa-shopping-cart mr-2 mt-2" aria-hidden="true"></i>
          Add to cart
        </span>
      </div>
    );
  });
  return (
    <>
      <Header />
      <Container>
        <h3 className="title-product align-center">List product</h3>
        <div className="template-grid">
          {readerList}
        </div>
      </Container>
      <Footer/>
    </>
  );
};
export default Home;

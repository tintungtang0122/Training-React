import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

PageTitle.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};

function PageTitle ({ title, image }) {
  return (
    <div className="page-title" style={{backgroundImage: `url(${image})`}}>
      <Container className="h-100 d-flex align-items-center">
        <h2>{ title }</h2>
      </Container>
    </div>
  );
}

PageTitle.defaultProps = {
  title: '',
  image: ''
};

export default PageTitle;

import React from 'react';
import { Container, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="wrapper-footer">
      <Container>
        <Col sm={12} className="text-center">
          <span>
            This is a Footer
          </span>
        </Col>
      </Container>
    </div>
  );
};

export default Footer;

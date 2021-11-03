import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';


Heading.propTypes = {
    title: PropTypes.string
};
function Heading({ title }) {
    return (
        <div className="wrapper-heading">
            <Container className="Container h-100 d-flex align-items-center">
                <h1>This is Heading</h1>
                <h2>{title}</h2>
            </Container>
        </div>
    )
}

Heading.defaultProps = {
    title: '',
}

export default Heading

import React from 'react';
import Button from '../../components/Button';


Gui.propTypes = {
  
};

function Gui(props) {
  return (
    <div className="container">
      <div className="item">
        <h2>Button</h2>
        <Button>Button</Button>
      </div>
      <div className="item">
        <h2>Slide home</h2>
        <Button>Button</Button>
      </div>
    </div>
  );
}

export default Gui;
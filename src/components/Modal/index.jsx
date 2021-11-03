import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Button from '../Button';

ModalPopup.propTypes = {
  children: PropTypes.any.isRequired,
  animation: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  size: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  classNameBtnRight: PropTypes.string,
  handleSubmit: PropTypes.func,
  textBtnLeft: PropTypes.string,
  textBtnRight: PropTypes.string,
  customClassButton: PropTypes.string,
  classNameBtnLeft: PropTypes.string,
  isDisabledButton: PropTypes.bool
};

function ModalPopup ({
  children,
  animation = false,
  isOpen,
  size,
  handleClose,
  customClass,
  classNameBtnRight,
  textBtnLeft,
  textBtnRight,
  handleSubmit,
  customClassButton,
  classNameBtnLeft,
  twoBtn,
  isDisabledButton
}) {
  
  return (
    <Modal
      animation={animation}
      onHide={() => {
        return true;
      }}
      show={isOpen}
      size={size}
      className={customClass}
    >
      <div
        className="modal-content__iconClose"
        onClick={handleClose}
        role="button"
        tabIndex={0}
        onKeyUp={handleClose}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <Modal.Body>
        <div>
          {children}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <>
          <div className="d-flex w-100">
            {twoBtn && (
              <>
                <Button
                  onClick={handleClose}
                  customClass={`${customClassButton} ${classNameBtnLeft}`}
                  type="button"
                >
                  {textBtnLeft}
                </Button>
                <Button
                  onClick={handleSubmit}
                  type="button"
                  customClass={`${customClassButton} ${classNameBtnRight}`}
                  isDisabled={isDisabledButton}
                >
                  {textBtnRight}
                </Button>
              </>
            )}
            {!twoBtn && (
              <Button
                onClick={handleClose}
                customClass={`${customClassButton} ${classNameBtnLeft}`}
                type="button"
              >
                {textBtnLeft}
              </Button>
            )}
            
          </div>
        </> 
      </Modal.Footer>
    </Modal>
  );
}

ModalPopup.defaultProps = {
  animation: false,
  size: '',
  customClass: '',
  classNameBtnRight: '',
  textBtnLeft: 'Cancel',
  textBtnRight: 'Ok',
  handleSubmit: () => {},
  customClassButton: '',
  classNameBtnLeft: '',
  icon: '',
  twoBtn: false,
  isDisabledButton: false,
  isLeftClose: false,
  handleClickChecbox: () => {}
};

export default ModalPopup;

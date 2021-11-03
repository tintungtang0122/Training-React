import React from 'react';

type Props = {
  onClick: Function,
  isDisabled?: any,
  customClass?: string,
  children: any,
  typeBtn?: string
};

const Button = ({
  isDisabled = false,
  onClick,
  customClass = '',
  children,
  typeBtn = ''
}: Props): any => {
  return (
    <button
      type={typeBtn}
      className={`button ${customClass}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  isDisabled: false,
  customClass: '',
  typeBtn: ''
};

export default Button;

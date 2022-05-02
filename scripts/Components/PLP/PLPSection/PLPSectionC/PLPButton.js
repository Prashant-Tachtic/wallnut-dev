import React from 'react';
import PropTypes from 'prop-types';

const PLPButton = (props) => {
  const { buttonAction, brown, isValid = true, children, link, className } = props;
  const handleClick = (e) => {
    if (!link && buttonAction) {
      e.preventDefault();
      buttonAction(e);
    }
  };

  return (
    <a
      href={link || ''}
      className={`
        ${className}
        ${isValid ? 'border border-brown' : 'pointer-events-none bg-brown-light boder-none'}
        ${
          brown
            ? 'bg-brown text-white hover:bg-white hover:text-brown'
            : 'text-brown hover:bg-brown hover:text-white'
        }
        hover:no-underline
        font-extralight
        inline-block
        md:px-12
        py-2
        rounded-full
        text-base
        w-full
        center
        uppercase
        
      `}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

PLPButton.defaultProps = {
  brown: false,
  isValid: true,
  link: '',
  className: '',
};

PLPButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  brown: PropTypes.bool,
  isValid: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
};

export default PLPButton;

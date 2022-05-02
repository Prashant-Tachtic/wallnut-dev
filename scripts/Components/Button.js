import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonAction, brown, blue, white, children, link, styles } = props;
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
        ${brown ? 'bg-brown text-white hover:bg-white hover:text-brown' : ''}
        ${
          white
            ? 'bg-white text-brown border-2 font-light border-brown border-solid hover:bg-brown hover:text-white font-lg lg:font-normal'
            : ''
        }
        ${blue ? 'bg-blue text-white' : ''}
        hover:no-underline
        font-extralight
        inline-block
        px-9
        md:px-12
        py-2
        rounded-full
        text-base
        w-full
        center
        uppercase
        ${styles}
      `}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

Button.defaultProps = {
  brown: false,
  blue: false,
  white: false,
  link: '',
  styles: '',
  buttonAction: () => {},
};

Button.propTypes = {
  buttonAction: PropTypes.func,
  brown: PropTypes.bool,
  white: PropTypes.bool,
  blue: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired,
  link: PropTypes.string,
  styles: PropTypes.string,
};

export default Button;

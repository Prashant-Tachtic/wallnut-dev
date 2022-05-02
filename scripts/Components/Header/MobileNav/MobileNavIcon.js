import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

const MobileNavIcon = ({ isOpen }) => (
  <NavIcon>
    <Span className="top-0" isOpen={isOpen} smallwidth />
    <Span className="top-2" isOpen={isOpen} rotateRight />
    <Span className="top-2" isOpen={isOpen} rotateLeft />
    <Span className="top-4" isOpen={isOpen} smallwidth />
  </NavIcon>
);

const Span = styled.div(({ isOpen, smallwidth, rotateRight, rotateLeft }) => [
  tw`block absolute h-0.5 w-full bg-black rounded opacity-100 left-0 transform rotate-0 transition	duration-200 ease-in-out`,
  isOpen && smallwidth && tw`top-4 w-0 left-2/4`,
  isOpen && rotateRight && tw`transform rotate-45`,
  isOpen && rotateLeft && tw`transform -rotate-45`,
]);

const NavIcon = styled.div(() => [
  tw`relative w-7 transform rotate-0 transition	duration-500 ease-in-out cursor-pointer`,
]);

MobileNavIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileNavIcon;

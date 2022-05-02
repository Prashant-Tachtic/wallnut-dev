import PropTypes from 'prop-types';
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const PLPDescription = ({ collectionTitle, collectionDescription, filterRef }) => (
  <div ref={filterRef} className=" grid justify-center font-serif pt-4 px-4 md:pt-12 lg:pt-15">
    <div className="max-w-screen-md text-center">
      {collectionTitle === 'Labor Day Sale' ||
      collectionTitle === 'Black Friday' ||
      collectionTitle === 'Cyber Monday' ||
      collectionTitle === 'Fresh Start Event'
        ? null
        : [
            <h1 className="text-2xl lg:text-3xl font-serif">{collectionTitle}</h1>,
            <Description dangerouslySetInnerHTML={{ __html: collectionDescription }} />,
          ]}
    </div>
  </div>
);

PLPDescription.defaultProps = {
  collectionDescription: '',
};

PLPDescription.propTypes = {
  filterRef: PropTypes.shape({ current: PropTypes.shape({}) }).isRequired,
  collectionDescription: PropTypes.string,
  collectionTitle: PropTypes.string.isRequired,
};

const Description = styled.div`
  p {
    ${tw`text-sm md:text-lg`}
  }
`;

export default PLPDescription;

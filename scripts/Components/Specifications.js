import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Specifications = ({ section }) => {
  const { name, ...restProps } = section;
  const {
    headerTitle1,
    headerTitle2,
    weight,
    weightWithCushions,
    weightWithoutCusions,
    weightCapacity,
    woodType,
    woodSpeciesLine1,
    woodSpeciesLine2,
    cushionContent,
    backrestCushionContent,
    seatCushionContent,
    height,
    depth,
    width,
    seatHeight,
    seatDepth,
    seatWidth,
    seatToTopOfBackrest,
    seatDepthWithBackRest,
    backHeight,
    cherryHeight,
  } = restProps;

  return (
    <div className="font-serif">
      <div className="mb-5">
        <SectionName>{headerTitle1}</SectionName>
        {weight && (
          <ColumnOne>
            <ColumnName>Weight</ColumnName>
            <ColumnValue>{weight}</ColumnValue>
          </ColumnOne>
        )}
        {weightWithCushions && (
          <ColumnOne>
            <ColumnName>Weight (WITH CUSHIONS)</ColumnName>
            <ColumnValue>{weightWithCushions}</ColumnValue>
          </ColumnOne>
        )}
        {weightWithoutCusions && (
          <ColumnOne>
            <ColumnName>Weight (WITHOUT CUSHIONS)</ColumnName>
            <ColumnValue>{weightWithoutCusions}</ColumnValue>
          </ColumnOne>
        )}
        <ColumnOne>
          <ColumnName>Weight Capacity</ColumnName>
          <ColumnValue>{weightCapacity}</ColumnValue>
        </ColumnOne>
        <ColumnOne>
          <ColumnName>Wood Type</ColumnName>
          <ColumnValue>{woodType}</ColumnValue>
        </ColumnOne>
        <ColumnOne>
          <ColumnName>Wood Species</ColumnName>
          <ColumnValue>{woodSpeciesLine1}</ColumnValue>
        </ColumnOne>
        {woodSpeciesLine2 && (
          <ColumnOne>
            <ColumnName />
            <ColumnValue>{woodSpeciesLine2}</ColumnValue>
          </ColumnOne>
        )}
        {cushionContent && (
          <ColumnOne>
            <ColumnName>Cushion Content</ColumnName>
            <ColumnValue>{cushionContent}</ColumnValue>
          </ColumnOne>
        )}
        {seatCushionContent && (
          <ColumnOne>
            <ColumnName>Seat Cushion Content</ColumnName>
            <ColumnValue>{seatCushionContent}</ColumnValue>
          </ColumnOne>
        )}
        {backrestCushionContent && (
          <ColumnOne>
            <ColumnName>Backrest Cushion Content</ColumnName>
            <ColumnValue>{backrestCushionContent}</ColumnValue>
          </ColumnOne>
        )}
      </div>

      {cherryHeight ? (
        <div>
          <SectionName>{headerTitle2}</SectionName>
          <ColumnFive>
            <ColumnName />
            <ColumnValue>Cherry</ColumnValue>
            <ColumnValue>Walnut</ColumnValue>
            <ColumnValue>Black</ColumnValue>
          </ColumnFive>
          <ColumnFive>
            <ColumnName>Height</ColumnName>
            <ColumnValue>{restProps.cherryHeight}</ColumnValue>
            <ColumnValue>{restProps.walnutHeight}</ColumnValue>
            <ColumnValue>{restProps.blackHeight}</ColumnValue>
          </ColumnFive>
          <ColumnFive>
            <ColumnName>Depth</ColumnName>
            <ColumnValue>{restProps.cherryDepth}</ColumnValue>
            <ColumnValue>{restProps.walnutDepth}</ColumnValue>
            <ColumnValue>{restProps.walnutDepth}</ColumnValue>
          </ColumnFive>
          <ColumnFive>
            <ColumnName>Width</ColumnName>
            <ColumnValue>{restProps.cherryWidth}</ColumnValue>
            <ColumnValue>{restProps.walnutWidth}</ColumnValue>
            <ColumnValue>{restProps.walnutWidth}</ColumnValue>
          </ColumnFive>
          <ColumnFive>
            <ColumnName>Seat Height</ColumnName>
            <ColumnValue>{restProps.cherrySeatHeight}</ColumnValue>
            <ColumnValue>{restProps.walnutSeatHeight}</ColumnValue>
            <ColumnValue>{restProps.walnutSeatHeight}</ColumnValue>
          </ColumnFive>
          <ColumnFive>
            <ColumnName>Seat Depth</ColumnName>
            <ColumnValue>{restProps.cherrySeatDepth}</ColumnValue>
            <ColumnValue>{restProps.walnutSeatDepth}</ColumnValue>
            <ColumnValue>{restProps.walnutSeatDepth}</ColumnValue>
          </ColumnFive>
          <ColumnFive>
            <ColumnName>Seat Width</ColumnName>
            <ColumnValue>{restProps.cherrySeatWidth}</ColumnValue>
            <ColumnValue>{restProps.walnutSeatWidth}</ColumnValue>
            <ColumnValue>{restProps.walnutSeatWidth}</ColumnValue>
          </ColumnFive>
          <ColumnFive>
            <ColumnName>Back Height</ColumnName>
            <ColumnValue>{restProps.cherryBackHeight}</ColumnValue>
            <ColumnValue>{restProps.walnutBackHeight}</ColumnValue>
            <ColumnValue>{restProps.walnutBackHeight}</ColumnValue>
          </ColumnFive>
        </div>
      ) : (
        <div>
          <SectionName>{headerTitle2}</SectionName>
          <ColumnTwo>
            <ColumnName>Height</ColumnName>
            <ColumnValue>{height}</ColumnValue>
          </ColumnTwo>
          <ColumnTwo>
            <ColumnName>Depth</ColumnName>
            <ColumnValue>{depth}</ColumnValue>
          </ColumnTwo>
          <ColumnTwo>
            <ColumnName>Width</ColumnName>
            <ColumnValue>{width}</ColumnValue>
          </ColumnTwo>
          <ColumnTwo>
            <ColumnName>Seat Height</ColumnName>
            <ColumnValue>{seatHeight}</ColumnValue>
          </ColumnTwo>
          {seatDepth && (
            <ColumnTwo>
              <ColumnName>Seat Depth</ColumnName>
              <ColumnValue>{seatDepth}</ColumnValue>
            </ColumnTwo>
          )}
          {seatDepthWithBackRest && (
            <ColumnTwo>
              <ColumnName>Seat Depth (WITH BACKREST)</ColumnName>
              <ColumnValue>{seatDepthWithBackRest}</ColumnValue>
            </ColumnTwo>
          )}
          <ColumnTwo>
            <ColumnName>Seat Width</ColumnName>
            <ColumnValue>{seatWidth}</ColumnValue>
          </ColumnTwo>
          {seatToTopOfBackrest && (
            <ColumnTwo>
              <ColumnName>Seat to top of backrest</ColumnName>
              <ColumnValue>{seatToTopOfBackrest}</ColumnValue>
            </ColumnTwo>
          )}
          {backHeight && (
            <ColumnTwo>
              <ColumnName>Back Height</ColumnName>
              <ColumnValue>{backHeight}</ColumnValue>
            </ColumnTwo>
          )}
        </div>
      )}
    </div>
  );
};

const ColumnOne = styled.div.attrs({
  className: 'md:ml-5 py-1 border-b items-center grid grid-cols-2 gap-4',
})``;

const ColumnTwo = styled.div.attrs({
  className:
    'md:ml-5 py-1 border-b items-center grid md:ml-5 py-1 border-b items-center grid grid-cols-2 gap-4',
})``;

const ColumnFive = styled.div.attrs({
  className: 'md:ml-5 py-1 border-b items-center grid',
})`
  grid-template-columns: 3fr 1fr 1fr 1fr;
`;

const SectionName = styled.div.attrs({
  className: 'text-base font-serif mb-2 font-normal text-blue-light',
})``;

const ColumnName = styled.div.attrs({
  className: 'text-xxs md:text-xs',
})`
  text-transform: uppercase;
`;

const ColumnValue = styled.div.attrs({
  className: 'text-xs md:text-sm',
})``;

Specifications.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    headerTitle1: PropTypes.string.isRequired,
    headerTitle2: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    weightWithCushions: PropTypes.string.isRequired,
    weightWithoutCusions: PropTypes.string.isRequired,
    weightCapacity: PropTypes.string.isRequired,
    woodType: PropTypes.string.isRequired,
    woodSpeciesLine1: PropTypes.string.isRequired,
    woodSpeciesLine2: PropTypes.string.isRequired,
    cushionContent: PropTypes.string.isRequired,
    backrestCushionContent: PropTypes.string.isRequired,
    seatCushionContent: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    depth: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    seatHeight: PropTypes.string.isRequired,
    seatDepth: PropTypes.string.isRequired,
    seatWidth: PropTypes.string.isRequired,
    seatToTopOfBackrest: PropTypes.string.isRequired,
    seatDepthWithBackRest: PropTypes.string.isRequired,
    backHeight: PropTypes.string.isRequired,
    cherryHeight: PropTypes.string.isRequired,
  }).isRequired,
};

export default Specifications;

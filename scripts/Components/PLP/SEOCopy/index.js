import React from 'react';
import PropTypes from 'prop-types';
import LoungeChairSEO from './LoungeChairSEO';
import DiningChairSEO from './DiningChairSEO';
import ScandiCollectionSEO from './ScandiColletionSEO';
import ClassicCollectionSEO from './ClassicCollectionSEO';

const SeoCopy = ({ title }) => {
  if (title === 'Lounge Chairs') {
    return <LoungeChairSEO />;
  }

  if (title === 'Dining Chairs') {
    return <DiningChairSEO />;
  }
  if (title === 'The Scandinavian Chair Collection') {
    return <ScandiCollectionSEO />;
  }
  if (title === 'The Classic Chair Collection') {
    return <ClassicCollectionSEO />;
  }
  return null;
};

SeoCopy.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SeoCopy;

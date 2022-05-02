import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../../Tab';
import VideoPlayer from '../../VideoPlayer';
import { getDataByBlockSectionName } from '../../../utils';

const FeaturesTab = ({ productTypeBlock }) => {
  const sectionOne = getDataByBlockSectionName('features_section_1', productTypeBlock, 3);
  const sectionTwo = getDataByBlockSectionName('features_section_2', productTypeBlock, 3);
  const sectionThree = getDataByBlockSectionName('features_section_3', productTypeBlock, 3);
  const sectionFour = getDataByBlockSectionName('features_section_4', productTypeBlock, 3);
  const sectionFive = getDataByBlockSectionName('features_section_5', productTypeBlock, 3);

  const sectionData = [sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive];

  return (
    <>
      {sectionOne.name && (
        <Tab tabName={sectionOne.name}>
          {sectionData.map((section, i) => (
            <div key={i}>
              {section.title && (
                <h3 className="pb-3 text-base text-blue-light font-serif">{section.title}</h3>
              )}
              {section.paragraph && (
                <p className="mb-2 text-sm font-extralight">{section.paragraph}</p>
              )}
              {section.image && section.media === 'image' && (
                <img className="mb-5" src={section.image} alt="" />
              )}
              {section.video && section.media === 'video' && (
                <div className="mb-5">
                  <VideoPlayer link={section.video} autoPlay loop />
                </div>
              )}
            </div>
          ))}
        </Tab>
      )}
    </>
  );
};

FeaturesTab.defaultProps = {
  productTypeBlock: {
    settings: {},
  },
};

FeaturesTab.propTypes = {
  productTypeBlock: PropTypes.shape({}),
};

export default FeaturesTab;

import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../VideoPlayer';
import { getAllBlockSectionData } from '../../../utils';

const FeaturesSection = ({ productBlock }) => {
  const sectionData = getAllBlockSectionData(productBlock, 'features', 3);

  if (sectionData.every((section) => !section.title)) {
    return null;
  }

  return (
    <>
      {sectionData.map((section, i) => {
        const even = i % 2 === 0;

        return (
          <div className="col-span-2 grid grid-cols-2 gap-8" key={i}>
            <div className="grid items-center justify-items-center">
              {even && section.image && section.media === 'image' && (
                <img className="lg:mb-0 md:mb-5" src={section.image} alt="" />
              )}
              {even && section.video && section.media === 'video' && (
                <VideoPlayer link={section.video} autoPlay loop />
              )}
              {!even && (
                <div className="w-10/12">
                  {section.title && (
                    <h3 className="font-normal font-serif pb-3 text-blue-light text-sm md:text-base">
                      {section.title}
                    </h3>
                  )}
                  {section.paragraph && (
                    <p className="mb-2 text-sm font-extralight md:text-base">{section.paragraph}</p>
                  )}
                </div>
              )}
            </div>
            <div className="grid items-center justify-items-center">
              {!even && section.image && section.media === 'image' && (
                <img className="lg:mb-0 md:mb-5" src={section.image} alt="" />
              )}
              {!even && section.video && section.media === 'video' && (
                <VideoPlayer link={section.video} autoPlay loop />
              )}
              {even && (
                <div className="w-10/12">
                  {section.title && (
                    <h3 className="font-normal font-serif pb-3 text-blue-light text-sm md:text-base">
                      {section.title}
                    </h3>
                  )}
                  {section.paragraph && (
                    <p className="mb-2 font-extralight md:text-base">{section.paragraph}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

FeaturesSection.defaultProps = {
  productBlock: {},
};

FeaturesSection.propTypes = {
  productBlock: PropTypes.shape({}),
};

export default FeaturesSection;
